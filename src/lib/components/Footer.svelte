<!-- src/lib/components/Footer.svelte -->
<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[#1D0E03] text-[#FFF6EF]">
	<!-- Main Footer Content -->
	<div class="container mx-auto px-6 md:px-16 py-12 md:py-16">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
			<!-- Company Info -->
			<div>
				<div class="mb-4">
					<span class="text-2xl font-light font-avenir">
						<span class="text-[#014B3F]">TRAVEL</span>
						<span class="text-[#FF5E1A]">JET</span>
					</span>
				</div>
				<p class="font-questrial text-[#FFF6EF] opacity-70 mb-4">
					Making travelling easier every day. Your trusted partner for unforgettable journeys around
					the world.
				</p>
				<div class="flex gap-4">
					<!-- Social Media Icons -->
					<a
						href="https://www.facebook.com/taratvtravel"
						class="w-10 h-10 bg-[#014B3F] rounded-full flex items-center justify-center hover:bg-[#02CA81] transition"
						aria-label="Facebook"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
							/>
						</svg>
					</a>
					<a
						href="https://www.instagram.com/panoramatv_tours/"
						class="w-10 h-10 bg-[#014B3F] rounded-full flex items-center justify-center hover:bg-[#02CA81] transition"
						aria-label="Instagram"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-lg font-avenir font-light mb-4 text-[#02CA81]">Quick Links</h3>
				<ul class="space-y-2 font-questrial">
					<li>
						<a href="#home" class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition"
							>Home</a
						>
					</li>
					<li>
						<a href="#about" class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition"
							>About Us</a
						>
					</li>
					<li>
						<a
							href="#destinations"
							class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition">Destinations</a
						>
					</li>
					<li>
						<a href="#contact" class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition"
							>Contact</a
						>
					</li>
				</ul>
			</div>

			<!-- Popular Destinations -->
			<div>
				<h3 class="text-lg font-avenir font-light mb-4 text-[#02CA81]">Popular Tours</h3>
				<ul class="space-y-2 font-questrial">
					<li>
						<a
							href="#destinations"
							class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition"
							>Caribbean Cruises</a
						>
					</li>
					<li>
						<a
							href="#destinations"
							class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition"
							>Europe Grand Tour</a
						>
					</li>
					<li>
						<a
							href="#destinations"
							class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition"
							>India Sacred Sites Tour</a
						>
					</li>
					<li>
						<a
							href="#destinations"
							class="opacity-70 hover:opacity-100 hover:text-[#02CA81] transition">Southeast Asia</a
						>
					</li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="text-lg font-avenir font-light mb-4 text-[#02CA81]">Contact Us</h3>
				<ul class="space-y-3 font-questrial">
					<li class="flex items-start gap-2 opacity-70">
						<svg
							class="w-5 h-5 mt-0.5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span>7-1365 Morningside Ave.<br />Scarborough, ON M1B 4Y5</span>
					</li>
					<li class="flex items-center gap-2 opacity-70">
						<svg
							class="w-5 h-5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						<span>+1 (416) 286-8192</span>
					</li>
					<li class="flex items-center gap-2 opacity-70">
						<svg
							class="w-5 h-5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span>info@traveljet.com</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-[#FFF6EF] border-opacity-20">
		<div class="container mx-auto px-6 md:px-16 py-6">
			<div
				class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-questrial opacity-70"
			>
				<p>© {currentYear} Travel Jet Inc. All rights reserved.</p>
				<!-- <div class="flex gap-6">
					<a href="#" class="hover:opacity-100 hover:text-[#02CA81] transition">Privacy Policy</a>
					<a href="#" class="hover:opacity-100 hover:text-[#02CA81] transition">Terms of Service</a>
					<a href="#" class="hover:opacity-100 hover:text-[#02CA81] transition">Sitemap</a>
				</div> -->
			</div>
		</div>
	</div>
</footer>
