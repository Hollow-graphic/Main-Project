<script>
	import ReturnButton from "$lib/components/ReturnButton.svelte";
	const day = "day-22-10-2026"
</script>

<main>
	<ReturnButton></ReturnButton>
	<div class="absolute inset-0 w-full h-full object-cover object-center z-0">
		<img class="absolute z-30 h-full w-auto max-w-none object-contain pointer-events-none" alt="page" src="/img/page.png"/>
	</div>
	<div class="bg-zinc-800/10 w-[156vh] translate-y-[110px] gap-8 m-4">
		<div class="relative h-[256px] w-[256px]">
			<img class="absolute inset-0 z-0 h-full w-full" alt="cart_a" src={`/dailyreport/${day}/cart.png`}/>
			<div class="absolute w-full h-[15%] text-xl z-20 text-zinc-800 text-center bottom-0">~ day-22-10-2026 ~</div>
		</div>
		<div class="flex font-bold p-1 text-zinc-800">
			Resume: <br>
		</div>
		<div class="h-[496px]">
			{#each { length: 2 }, i}
				<button onclick={() => window.open(`./${day}/${i}.png`)}>
					<img class="flex inset-0 z-0 w-[256px] p-2" alt={i.toString()} src={`/dailyreport/${day}/${i}.png`}/>
				</button>
			{/each}
		</div>
	</div>
</main>