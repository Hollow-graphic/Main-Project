<script>
	import ReturnButton from "$lib/components/ReturnButton.svelte";
</script>

<main>
	<ReturnButton></ReturnButton>
	<div class="absolute inset-0 w-full h-full object-cover object-center z-0">
		<img class="absolute z-30 h-full w-auto max-w-none object-contain pointer-events-none" alt="page" src="/img/page.png"/>
	</div>
	<div class="bg-zinc-800/10 h-96 w-[156vh] translate-y-[110px] gap-8 m-4">
		<div class="relative h-[256px] w-[256px]">
			<img class="absolute inset-0 z-0 h-full w-full" alt="cart_a" src="/dailyreport/day-20-10-2026/cart.png"/>
			<!--<img class="absolute inset-0 z-10 h-[150%] w-[150%] rotate-[0.9deg] -translate-x-[32px] -translate-y-[32px]" alt="pocket" src="/img/journal/side.png"/>-->
			<div class="absolute w-full h-[15%] text-xl z-20 text-zinc-800 text-center bottom-0">~ day-20-10-2026 ~</div>
		</div>
		<div class="flex font-bold p-1 text-zinc-800">
			Resume: <br>
			I work on my Astronautilus Archipelago Mod <br>
			I fix few bugs with the shop AP item and remade the texture
		</div>
		<img class="flex inset-0 z-0 h-[500px] w-[640px]" alt="1" src="/dailyreport/day-20-10-2026/1.webp"/>
	</div>
</main>