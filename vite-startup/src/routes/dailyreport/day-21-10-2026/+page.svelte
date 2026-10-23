<script>
	import ReturnButton from "$lib/components/ReturnButton.svelte";
</script>

<main>
	<ReturnButton></ReturnButton>
	<div class="absolute inset-0 w-full h-full object-cover object-center z-0">
		<img class="absolute z-30 h-full w-auto max-w-none object-contain pointer-events-none" alt="page" src="/img/page.png"/>
	</div>
	<div class="bg-zinc-800/10 w-[156vh] translate-y-[110px] gap-8 m-4">
		<div class="relative h-[256px] w-[256px]">
			<img class="absolute inset-0 z-0 h-full w-full" alt="cart_a" src="/dailyreport/day-21-10-2026/cart.png"/>
			<!--<img class="absolute inset-0 z-10 h-[150%] w-[150%] rotate-[0.9deg] -translate-x-[32px] -translate-y-[32px]" alt="pocket" src="/img/journal/side.png"/>-->
			<div class="absolute w-full h-[15%] text-xl z-20 text-zinc-800 text-center bottom-0">~ day-21-10-2026 ~</div>
		</div>
		<div class="flex font-bold p-1 text-zinc-800">
			Resume: <br>
			 - I Start working on a archipelago implementation of HyperspeedCube Puzzle (HSC2) <br>
			The project is in Rust so I start learning a bit of it <br>
			I just add a custom Color for now but I will work it more tomorrow <br> 
			 <br>
			 - I look how I can add a playable Celeste to this website <br>
			There already a port of the game and I would need to fork the project <br>
			and make sure you cant exist the mods for legel reason <br>
			but it also mean I need to host the website on my main pc <br>
			and make a new page dedicated for this <br>
			 <br>
			 - I created multiple small manual archipealgo for: TowerOfTheDeep, Dracomaton and Astronautilus
		</div>
		<div class="grid grid-cols-5">
			<img class="flex inset-0 z-0 w-[256px]" alt="1" src="/dailyreport/day-21-10-2026/1.png"/>
		</div>
	</div>
</main>