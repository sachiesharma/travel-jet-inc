<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import LocationCard from '$lib/components/LocationCard.svelte';
	import { destinations } from '$lib/data/destinations';
</script>

<!-- the Container-->
<Navbar />

<!-- Hero section with ID -->
<section id="home">
	<div
		class="relative bg-[url('https://images.unsplash.com/photo-1744584592746-d24062e3aab7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
	>
		<!-- colour overlay -->
		<div class="absolute inset-0 bg-[#1D0E03] opacity-30"></div>

		<!-- Content -->
		<div class="relative grid grid-cols-2">
			<div class="flex flex-col gap-8 pr-32 pl-16 py-48">
				<h1 class="text-5xl font-light font-avenir text-[#FFF6EF]">Welcome to Travel Jet</h1>
				<p class="text-lg font-questrial text-[#FFF6EF]">Making travelling easier every day.</p>
				<div class="flex gap-3">
					<a
						href="#destinations"
						class="bg-[#FF5E1A] px-6 py-3 text-[#FFF6EF] rounded-lg hover:bg-[#e54d0f] transition font-questrial flex items-center justify-center"
					>
						Plan your Trip
					</a>
					<a
						href="#contact"
						class="border-2 border-[#02CA81] bg-transparent text-[#02CA81] px-6 py-3 rounded-lg hover:bg-[#02CA81] hover:text-[#FFF6EF] transition font-questrial flex items-center justify-center"
					>
						Contact Us
					</a>
				</div>
			</div>
			<div></div>
		</div>
	</div>
</section>

<!-- Destinations Section -->
<section id="destinations" class="container mx-auto px-16 py-12">
	<h1 class="text-4xl font-medium">Discover Your Next Journey</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each destinations as destination (destination.id)}
			<LocationCard {destination} />{/each}
	</div>
</section>

<!-- About Section -->
<section id="about" class="bg-white py-16">
	<div class="container mx-auto px-16">
		<h2 class="text-4xl font-bold mb-6">About Travel Jet</h2>
		<p class="text-gray-700 text-lg mb-4">
			At Travel Jet, we believe that travel is more than just visiting new places—it's about
			creating unforgettable memories and experiencing the world's diverse cultures.
		</p>
		<p class="text-gray-700 text-lg">
			With over 30 years of experience, we specialize in curated travel experiences that cater to
			your unique interests and preferences.
		</p>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-16">
	<div class="container mx-auto px-16">
		<h2 class="text-4xl font-bold mb-8">Contact Us</h2>
		<form class="max-w-2xl">
			<div class="mb-4">
				<label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
				<input
					type="text"
					id="name"
					class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
				/>
			</div>

			<div class="mb-4">
				<label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
				<input
					type="email"
					id="email"
					class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
				/>
			</div>

			<div class="mb-4">
				<label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
				<textarea
					id="message"
					rows="5"
					class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
				></textarea>
			</div>

			<button
				type="submit"
				class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
			>
				Send Message
			</button>
		</form>
	</div>
</section>

<Footer />

<style lang="postcss">
	:global(html) {
		background-color: #fff6ef;
		scroll-behavior: smooth;
	}

	:global(p) {
		font-family: 'Questrial', sans-serif;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Avenir', system-ui, sans-serif;
		font-weight: 300; /* Light weight */
	}
</style>
