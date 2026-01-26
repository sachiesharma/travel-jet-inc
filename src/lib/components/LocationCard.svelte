<!-- src/components/LocationCard.svelte -->
<script>
	export let destination = {};
</script>

<div
	class="group border-2 border-transparent rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:border-[#02CA81] hover:-translate-y-2"
>
	<!-- Image container with overlay -->
	<div class="relative overflow-hidden h-56">
		<img
			src={destination.image}
			alt={destination.destination}
			class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
		/>
		<!-- Gradient overlay on hover -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-[#1D0E03] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"
		></div>

		<!-- Duration badge -->
		{#if destination.duration}
			<div
				class="absolute bottom-4 left-4 bg-white bg-opacity-90 text-[#1D0E03] px-3 py-1 rounded-full font-questrial text-sm"
			>
				{destination.duration}
			</div>
		{/if}
	</div>

	<!-- Content -->
	<div class="p-6">
		<div class="flex items-start justify-between mb-3">
			<h3 class="text-xl md:text-2xl font-light font-avenir text-[#1D0E03] flex-1">
				{destination.destination}
			</h3>

			<!-- Rating -->
			{#if destination.rating}
				<div class="flex items-center gap-1 ml-2">
					<svg class="w-5 h-5 text-[#FF5E1A]" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<span class="font-questrial text-[#1D0E03] font-bold">{destination.rating}</span>
				</div>
			{/if}
		</div>

		<p class="text-[#1D0E03] opacity-70 mb-4 font-questrial leading-relaxed">
			{destination.description}
		</p>

		{#if destination.highlights}
			<div class="mb-4">
				<div class="flex flex-wrap gap-2">
					{#each destination.highlights.slice(0, 3) as highlight}
						<span class="bg-[#FBD3C0] text-[#1D0E03] px-3 py-1 rounded-full text-sm font-questrial">
							{highlight}
						</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if destination.bestTime}
			<div class="flex items-center gap-2 text-sm mb-4">
				<svg class="w-5 h-5 text-[#02CA81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				<span class="font-questrial text-[#1D0E03] opacity-70"
					>Best time: {destination.bestTime}</span
				>
			</div>
		{/if}

		<!-- CTA Button -->
		<a
			href="#contact"
			class="block w-full text-center bg-[#014B3F] text-[#FFF6EF] py-3 rounded-lg hover:bg-[#02CA81] transition-colors font-questrial"
		>
			Book Now
		</a>
	</div>
</div>
