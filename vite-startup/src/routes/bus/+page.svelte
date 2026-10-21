<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	let isTabOpen = $state(false)
	let onTab = $state("about me")
	let onBigTab = $state("Main")
	let isMuted = $state(true)
	let video: HTMLVideoElement;

	const Tabs = {"Main":["About ME", "Project", "Links"], "Journal":["DailyReport", "Memories"]}
</script>

<svelte:window
	//onkeydown={(ev) => {if (ev.key === 'z' && (ev.ctrlKey || ev.metaKey)) undo();}}
/>


<!-- Tab div -->
<div  class="fixed m-2 bg-zinc-800/80 rounded-lg shadow-lg z-20">
	<button onclick={() => window.location.href = window.location.href.slice(0, -4)} style={"font-size: xx-large;"}> exit </button>
	{#if isTabOpen}
	<div
		class="fixed text-zinc-50 bg-zinc-800/80 rounded-lg shadow-lg m-1" 
		style={`height:88%; width:20%`}
	>
	</div>
	{/if}
</div>

<div class="fixed bg-zinc-800/80 bottom-0 left-0 m-2 rounded-lg shadow-lg z-20 text-lg">
	<button onclick={() => {isMuted = !isMuted; video.muted = isMuted}}> Music: {isMuted? "OFF" : "ON"} </button>
</div>


<main class="flex items-center flex-col h-full w-full absolute">
	<video
		bind:this={video}
        autoplay
        loop
        muted={isMuted}
        playsinline
        class="absolute inset-0 w-full h-full object-cover object-center z-0"
    >
        <source src="/img/PaintBus.mp4" type="video/mp4" />
    </video>
	<!-- Main Tab-->
	{#if onBigTab === "Main"}
	{:else}
	{/if}
</main>