import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

console.log('API Key loaded:', RESEND_API_KEY ? 'Yes ✓' : 'No ✗');

const resend = new Resend(RESEND_API_KEY);

export const actions = {
	contact: async ({ request }) => {
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
				from: 'Travel Jet Contact <onboarding@resend.dev>',
				to: 'tarajsharma@gmail.com',
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
