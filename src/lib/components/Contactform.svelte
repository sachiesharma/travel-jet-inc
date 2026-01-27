<!-- src/lib/components/ContactForm.svelte -->
<script>
	import { enhance } from '$app/forms';

	export let form = null;

	let isSubmitting = false;
</script>

<section id="contact" class="py-16 md:py-24 bg-[#FFF6EF]">
	<div class="container mx-auto px-6 md:px-16 max-w-6xl">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
			<!-- Left side - Contact Info (1 column) -->
			<div class="flex flex-col justify-center lg:col-span-1">
				<h2 class="text-3xl md:text-4xl font-light font-avenir text-[#1D0E03] mb-4">
					Get in Touch
				</h2>
				<p class="text-base font-questrial text-[#1D0E03] opacity-70 mb-8 leading-relaxed">
					Have questions? We'd love to hear from you.
				</p>

				<div class="space-y-6">
					<!-- Email -->
					<div>
						<h3 class="font-avenir font-light text-sm text-[#1D0E03] mb-1 opacity-60">Email</h3>
						<a
							href="mailto:tarajsharma@gmail.com"
							class="font-questrial text-base text-[#014B3F] hover:text-[#02CA81] transition"
						>
							tarajsharma@gmail.com
						</a>
					</div>

					<!-- Phone -->
					<div>
						<h3 class="font-avenir font-light text-sm text-[#1D0E03] mb-1 opacity-60">Phone</h3>
						<a
							href="tel:+15551234567"
							class="font-questrial text-base text-[#014B3F] hover:text-[#02CA81] transition"
						>
							+1 (416) 286-8192
						</a>
					</div>

					<!-- Address -->
					<div>
						<h3 class="font-avenir font-light text-sm text-[#1D0E03] mb-1 opacity-60">Address</h3>
						<p class="font-questrial text-base text-[#1D0E03] opacity-70">
							7-1365 Morningside Ave<br />
							Scarborough, ON M1B 4Y5
						</p>
					</div>
				</div>
			</div>

			<!-- Right side - Contact Form (2 columns) -->
			<div class="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
				{#if form?.success}
					<div
						class="bg-[#02CA81] bg-opacity-10 border-2 border-[#02CA81] text-[#014B3F] px-4 py-3 rounded-lg mb-4"
					>
						<p class="font-questrial text-sm">✓ Thank you! We'll get back to you soon.</p>
					</div>
				{/if}

				{#if form?.error}
					<div
						class="bg-[#FF5E1A] bg-opacity-10 border-2 border-[#FF5E1A] text-[#1D0E03] px-4 py-3 rounded-lg mb-4"
					>
						<p class="font-questrial text-sm">✗ {form.error}</p>
					</div>
				{/if}

				<form
					method="POST"
					action="?/contact"
					use:enhance={() => {
						isSubmitting = true;
						return async ({ update }) => {
							await update();
							isSubmitting = false;
						};
					}}
					class="space-y-4"
				>
					<!-- Name and Email in one row -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label for="name" class="block text-[#1D0E03] font-questrial text-sm mb-1">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								disabled={isSubmitting}
								class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02CA81] focus:border-transparent transition font-questrial disabled:bg-gray-100"
								placeholder="Enter your name"
							/>
						</div>

						<div>
							<label for="email" class="block text-[#1D0E03] font-questrial text-sm mb-1">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								disabled={isSubmitting}
								class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02CA81] focus:border-transparent transition font-questrial disabled:bg-gray-100"
								placeholder="Enter your email"
							/>
						</div>
					</div>

					<!-- Subject -->
					<div>
						<label for="subject" class="block text-[#1D0E03] font-questrial text-sm mb-1">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							disabled={isSubmitting}
							class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02CA81] focus:border-transparent transition font-questrial disabled:bg-gray-100"
							placeholder="How can we help?"
						/>
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="block text-[#1D0E03] font-questrial text-sm mb-1">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="3"
							required
							disabled={isSubmitting}
							class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02CA81] focus:border-transparent transition font-questrial disabled:bg-gray-100 resize-none"
							placeholder="Type your message here..."
						></textarea>
					</div>

					<!-- Submit Button -->
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full bg-[#014B3F] text-[#FFF6EF] px-8 py-3 rounded-lg hover:bg-[#02CA81] transition font-questrial disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isSubmitting ? 'Sending...' : 'Submit'}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
