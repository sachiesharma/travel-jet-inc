<!-- src/components/LocationCard.svelte -->
<script>
	export let destination = {};
</script>

<div class="border rounded-lg overflow-hidden">
	<img src={destination.image} alt={destination.destination} class="w-full h-48 object-cover" />
	<div class="p-4">
		<h3 class="text-xl font-semibold mb-2">{destination.destination}</h3>
		<p class="text-gray-600 mb-3">{destination.description}</p>

		{#if destination.highlights}
			<div class="mb-2">
				<span class="font-medium">Highlights:</span>
				<span class="text-gray-600">{destination.highlights.join(', ')}</span>
			</div>
		{/if}

		{#if destination.bestTime}
			<div>
				<span class="font-medium">Best Time:</span>
				<span class="text-gray-600">{destination.bestTime}</span>
			</div>
		{/if}
	</div>
</div>
