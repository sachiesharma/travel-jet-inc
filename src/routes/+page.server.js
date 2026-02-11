// import { fail } from '@sveltejs/kit';
// import { Resend } from 'resend';
// import { RESEND_API_KEY, CONTACT_EMAIL, CONTACT_FROM } from '$env/static/private';

// /** @type {string|undefined} */
// const RESEND_API_KEY_ENV = RESEND_API_KEY;

// /** @type {any} */
// const resend = new Resend(RESEND_API_KEY_ENV);

// console.log('API Key loaded:', RESEND_API_KEY_ENV ? 'Yes ✓' : 'No ✗');

// /** @type {import('@sveltejs/kit').Actions} */
// export const actions = {
// 	contact: async ({ request }) => {
// 		/** @type {FormData} */
// 		const data = await request.formData();

// 		// raw values may be string | File | null (FormDataEntryValue)
// 		const rawName = data.get('name');
// 		const rawEmail = data.get('email');
// 		const rawSubject = data.get('subject');
// 		const rawMessage = data.get('message');

// 		// Narrow to strings and validate presence
// 		if (
// 			typeof rawName !== 'string' ||
// 			typeof rawEmail !== 'string' ||
// 			typeof rawMessage !== 'string' ||
// 			!rawName ||
// 			!rawEmail ||
// 			!rawMessage
// 		) {
// 			return fail(400, { error: 'Please fill in all required fields' });
// 		}

// 		const name = rawName;
// 		const email = rawEmail;
// 		const subject =
// 			typeof rawSubject === 'string' && rawSubject ? rawSubject : 'New Contact Form Submission';
// 		const message = rawMessage;

// 		// Validate email format
// 		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 		if (!emailRegex.test(email)) {
// 			return fail(400, { error: 'Please enter a valid email address' });
// 		}

// 		try {
// 			// Send email to travel agency
// 			await resend.emails.send({
// 				from: CONTACT_FROM,
// 				to: CONTACT_EMAIL,
// 				replyTo: email,
// 				subject: `${subject} - from ${name}`,
// 				html: `
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message.replace(/\n/g, '<br>')}</p>
//           <hr>
//           <p><small>Sent from Travel Jet contact form</small></p>
//         `
// 			});

// 			return { success: true };
// 		} catch (error) {
// 			console.error('Email send error:', error);
// 			return fail(500, { error: 'Failed to send message. Please try again later.' });
// 		}
// 	}
// };

import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

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
				to: 'sachie@gmail.com', // Your test email for now
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
