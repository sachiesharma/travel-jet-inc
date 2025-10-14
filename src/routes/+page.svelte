<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import LocationCard from '$lib/components/LocationCard.svelte';
	import { destinations } from '$lib/data/destinations';
</script>

<!-- the Container-->
<Navbar />

<div>
	<div class="grid grid-cols-2 bg-[url('/hero-img.jpg')] bg-cover bg-center">
		<!-- Hero Section-->
		<div class="flex flex-col gap-8 pr-32 pl-16 py-48">
			<h1 class="text-4xl font-bold">Welcome to Travel Jet</h1>
			<small class="text-sm font-bold text-blue-600">Making travelling easier every day.</small>
			<div class="flex gap-3">
				<button class="bg-blue-600 px-5 py-3 text-white rounded-lg">Get started</button>
				<button class="border border-blue-600 text-blue-600 px-5 py-3 rounded-lg">See more</button>
			</div>
		</div>

		<!-- Image Section-->
		<div></div>
	</div>
</div>

<!-- Body -->

{#each destinations as destination (destination.id)}
	<LocationCard {destination} />{/each}

<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
