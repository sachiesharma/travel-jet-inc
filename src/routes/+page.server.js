// @ts-nocheck
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_EMAIL } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

// Rate limiting: track IP addresses and submission times
const submissionLog = new Map();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_SUBMISSIONS = 5; // Max 5 submissions per IP per hour

const getRateLimitKey = (request) => {
	return request.headers.get('x-forwarded-for') || request.headers.get('x-client-ip') || 'unknown';
};

const isRateLimited = (key) => {
	const now = Date.now();
	const submissions = submissionLog.get(key) || [];

	// Remove submissions older than the rate limit window
	const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW);

	if (recentSubmissions.length >= MAX_SUBMISSIONS) {
		return true;
	}

	// Update the log
	recentSubmissions.push(now);
	submissionLog.set(key, recentSubmissions);
	return false;
};

export const actions = {
	contact: async ({ request }) => {
		// Check rate limiting
		const clientKey = getRateLimitKey(request);
		if (isRateLimited(clientKey)) {
			return fail(429, { error: 'Too many submissions. Please try again later.' });
		}

		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const subject = data.get('subject') || 'New Contact Form Submission';
		const message = data.get('message');

		// Validate
		if (!name || !email || !message) {
			return fail(400, { error: 'Please fill in all required fields' });
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, { error: 'Please enter a valid email address' });
		}

		try {
			// Send email to travel agency
			await resend.emails.send({
				from: 'Travel Jet Contact <contact@traveljet.ca>',
				to: CONTACT_EMAIL,
				replyTo: email,
				subject: `${subject} - from ${name}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Subject:</strong> ${subject}</p>
					<p><strong>Message:</strong></p>
					<p>${message.replace(/\n/g, '<br>')}</p>
					<hr>
					<p><small>Sent from Travel Jet contact form</small></p>
				`
			});

			return { success: true };
		} catch (error) {
			console.error('Email send error:', error);
			return fail(500, { error: 'Failed to send message. Please try again later.' });
		}
	}
};
