<script lang="ts">
    const { day } = $props();
	import { goto } from '$app/navigation';
</script>


<div class=" relative h-[256px] w-[256px] rotate-[-1deg]">
	<button onclick={() => goto(`/dailyreport/${day}`)}>
		<img class="absolute inset-0 z-0 h-full w-full" alt="cart_a" src="/dailyreport/{day}/cart.png"/>
		<div class="absolute w-full h-[15%] text-xl z-20 text-zinc-800 text-center bottom-0">~ {day} ~</div>
	</button>
</div>