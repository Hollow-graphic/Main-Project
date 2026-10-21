<script lang="ts">
    let { title, cart} = $props();
</script>


<div class=" relative h-[256px] w-[256px] rotate-[-1deg]">
	<img class="absolute inset-0 z-0 h-full w-full" alt="cart_a" src="/img/journal/picture/{cart}.png"/>
	<img class="absolute inset-0 z-10 h-full w-full rotate-[0.9deg]" alt="pocket" src="/img/journal/pocket.png"/>
	<div class="absolute w-[70%] h-[15%] text-xl z-20 text-zinc-800 text-center bottom-1 left-1/2 -translate-x-1/2">{title}</div>
</div>