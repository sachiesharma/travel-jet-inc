<script>
	// imports ...
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import LocationCard from '$lib/components/LocationCard.svelte';
	import { destinations } from '$lib/data/destinations';
	import Contactform from '$lib/components/Contactform.svelte';
	import Expertise from '$lib/components/Expertise.svelte';

	/**
	 * @typedef {Object} FormResult
	 * @property {boolean} [success]
	 * @property {string} [error]
	 */

	/** @type {FormResult|null} */
	export let form = null;
</script>

<!-- the Container-->
<Navbar />

<!-- Hero section with ID -->
<section id="home">
	<div
		class="relative bg-[url('https://images.unsplash.com/photo-1744584592746-d24062e3aab7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center min-h-[600px] md:min-h-[700px]"
	>
		<!-- Color overlay -->
		<div class="absolute inset-0 bg-[#1D0E03] opacity-30"></div>

		<!-- Content -->
		<div class="relative grid grid-cols-1 lg:grid-cols-2 h-full">
			<div
				class="flex flex-col gap-6 md:gap-8 px-6 md:px-16 lg:pr-32 lg:pl-16 py-24 md:py-32 lg:py-48 justify-center"
			>
				<h1 class="text-3xl md:text-4xl lg:text-5xl font-light font-avenir text-[#FFF6EF]">
					Welcome to Travel Jet Inc.
				</h1>
				<p class="text-base md:text-lg font-questrial text-[#FFF6EF]">
					Making travelling easier every day.
				</p>
				<div class="flex flex-col sm:flex-row gap-3 md:gap-4">
					<a
						href="#destinations"
						class="bg-[#FF5E1A] px-6 py-3 text-[#FFF6EF] rounded-lg hover:bg-[#e54d0f] transition font-questrial flex items-center justify-center text-center"
					>
						Plan your Trip
					</a>
					<a
						href="#contact"
						class="border-2 border-[#02CA81] bg-transparent text-[#02CA81] px-6 py-3 rounded-lg hover:bg-[#02CA81] hover:text-[#FFF6EF] transition font-questrial flex items-center justify-center text-center"
					>
						Contact Us
					</a>
				</div>
			</div>
			<div class="hidden lg:block"></div>
		</div>
	</div>
</section>

<!-- Destinations Section -->
<section id="destinations" class="py-16 md:py-24 bg-[#FFF6EF]">
	<div class="container mx-auto px-6 md:px-16">
		<!-- Section Header -->
		<div class="text-center mb-12 md:mb-16">
			<h2 class="text-4xl md:text-5xl font-light font-avenir text-[#1D0E03] mb-4">
				Popular Destinations
			</h2>
			<p class="text-lg md:text-xl font-questrial text-[#1D0E03] opacity-70 max-w-2xl mx-auto">
				Discover breathtaking locations around the world. From tropical paradises to cultural
				wonders, your next adventure awaits.
			</p>
		</div>

		<!-- Destinations Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each destinations as destination (destination.id)}
				<LocationCard {destination} />
			{/each}
		</div>

		<!-- Call to Action -->
		<div class="text-center mt-12 md:mt-16">
			<a
				href="#contact"
				class="inline-flex items-center gap-2 bg-[#014B3F] text-[#FFF6EF] px-8 py-4 rounded-lg hover:bg-[#013830] transition font-questrial text-lg shadow-lg hover:shadow-xl"
			>
				Start Planning Your Trip
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>

<Expertise />

<!-- Custom Tours Strip -->
<section class="bg-[#014B3F] py-12 md:py-16">
	<div class="container mx-auto px-6 md:px-16 text-center">
		<h2 class="text-3xl md:text-4xl font-light font-avenir text-[#FFF6EF] mb-4">
			Don't See Your Dream Destination?
		</h2>
		<p class="text-lg md:text-xl font-questrial text-[#FFF6EF] opacity-90 max-w-4xl mx-auto mb-6">
			We customize tours to anywhere in the world! Whether you're dreaming of Australia, New
			Zealand, African safaris, South America, or anywhere else on the globe, we'll create the
			perfect itinerary for you. With decades of experience, we handle every detail from flights to
			accommodations to guided tours.
		</p>
		<a
			href="#contact"
			class="inline-flex items-center gap-2 bg-[#FF5E1A] text-[#FFF6EF] px-8 py-4 rounded-lg hover:bg-[#e54d0f] transition font-questrial text-lg shadow-lg hover:shadow-xl"
		>
			Request Custom Tour
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
		</a>
	</div>
</section>

<Contactform {form} />

<!-- About Section -->
<section id="about" class="py-16 md:py-24 bg-white">
	<div class="container mx-auto px-6 md:px-16 max-w-4xl text-center">
		<h2 class="text-4xl md:text-5xl font-light font-avenir text-[#1D0E03] mb-6">
			About Travel Jet
		</h2>
		<p class="text-lg md:text-xl font-questrial text-[#1D0E03] opacity-80 leading-relaxed mb-8">
			For over a decade, we've been crafting unforgettable journeys for travelers seeking authentic
			experiences around the world. From the beaches of the Caribbean to the temples of India, we
			handle every detail so you can focus on making memories.
		</p>
		<p class="text-lg font-questrial text-[#1D0E03] opacity-70 leading-relaxed">
			Whether you're visiting family abroad, exploring new cultures, or seeking adventure, we're
			here to make your travel dreams a reality.
		</p>
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
