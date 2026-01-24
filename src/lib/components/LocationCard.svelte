<!-- src/components/LocationCard.svelte -->
<script>
	export let destination = {};
</script>

<div class="border rounded-lg overflow-hidden bg-[#FBD3C0]">
	<img src={destination.image} alt={destination.destination} class="w-full h-48 object-cover" />
	<div class="p-4">
		<h3 class="text-xl font-medium mb- text-[#014B3F]">{destination.destination}</h3>
		<p class="text-[#014B3F] opacity-80 mb-3">{destination.description}</p>

		{#if destination.highlights}
			<div class="mb-2">
				<span class="font-medium text-[#014B3F]">Highlights:</span>
				<span class="text-[#014B3F] opacity-70">{destination.highlights.join(', ')}</span>
			</div>
		{/if}

		{#if destination.bestTime}
			<div>
				<span class="font-medium text-[#014B3F]">Best Time:</span>
				<span class="text-[#014B3F] opacity-70">{destination.bestTime}</span>
			</div>
		{/if}
	</div>
</div>
