<script lang="ts">
	import Header from '$lib/components/Header.svelte';
    import Project from '$lib/components/Project.svelte';
    import Block from '$lib/components/Block.svelte';
    import GlichedText from '$lib/components/GlichedText.svelte';
	import { clickToCopy } from "./clickToCopy.js";
    import Pocket from '$lib/components/Pocket.svelte';
    import { goto } from '$app/navigation';

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
<div  class="fixed m-2 bg-zinc-800/80 rounded-lg z-20">
	<button onclick={() => {isTabOpen = !isTabOpen}} style={"font-size: xx-large;"}> ≡ </button>
	{#if isTabOpen}
	<div
		class="fixed text-zinc-50 bg-zinc-800/80 rounded-lg m-1" 
		style={`height:88%; width:20%`}
	>
	</div>
	{/if}
</div>

<div class="fixed bg-zinc-800/80 bottom-0 left-0 m-2 rounded-lgz-20 text-lg">
	<button onclick={() => {isMuted = !isMuted; video.muted = isMuted}}> Music: {isMuted? "OFF" : "ON"} </button>
</div>
<button class="fixed bg-zinc-800/80 bottom-0 right-0 m-2 rounded-lg z-20 text-lg h-24 w-24 item-">
	<img class="flex p-1" alt="console" src="/img/console.png" height="100%" width="100%"/>
</button>


<main class="flex items-center flex-col h-full w-full absolute">
	<video
		bind:this={video}
        autoplay
        loop
        muted={isMuted}
        playsinline
        class="absolute inset-0 w-full h-full object-cover object-center z-0"
    >
        <source src="/img/Paint2.mp4" type="video/mp4" />
    </video>
	<div class="z-10 p-8">
		<Header></Header>
	</div>
	<button class="absolute border w-24 h-48  translate-y-[62vh] translate-x-[23vh]" onclick={() => goto("/bus")} aria-label="bus">
	</button>
	<!-- Main Tab-->
	{#if onBigTab === "Main"}
		<button class="absolute bg-zinc-700/0 h-[80vh] w-24 left-0 bottom-0 rotate-[-3deg]" onclick={() => {onBigTab = "Journal"; onTab = "DailyReport"}}>
			<img class="absolute z-4 h-full w-auto max-w-none object-contain -translate-x-[1090px] translate-y-[76px]" alt="github" src="/img/page.png"/>
			<img class="absolute z-30 h-full w-auto max-w-none object-contain -translate-x-[1090px] translate-y-[64px]" alt="github" src="/img/journal/sidename.png"/>
			<img class="z-5 h-full w-auto max-w-none object-contain -translate-x-[1100px] translate-y-[64px]" alt="github" src="/img/cover.png"/>
		</button>
		<div class="flex gap-8 z-10">
			<div class="flex bg-zinc-900/80 w-96 h-[60vh] rounded-lg shadow-lg shadow-rose-500/50 grid grid-rows-4">
				<div class="rounded-lg">
					<div class="grid grid-cols-2">
						<img alt="pfp" class="h-48 w-48 bg-zinc-700 shadow-lg shadow-rose-500/20" src="ttps://cdn.discordapp.com/avatars/842920374954098738/3177621de1d6428060ffd28881700735.webp"/>
						<div class="h-full w-full p-2"></div>
					</div>
				</div>
				<Block>
					<GlichedText text="this is a text message randomcharacter randomcharacter randomcharacter"></GlichedText>
				</Block>
			</div >
			<div class="flex-col h-[60vh] bg-zinc-900/80 gap-4 rounded-lg shadow-lg shadow-rose-500/50 w-[512px]">
				<div class="p-2">
					<button class="bg-zinc-700/50 rounded-lg p-1 inset-shadow-sm inset-shadow-rose-500" onclick={() => {onTab = "About Me"}}> About Me </button>
					<button class="bg-zinc-700/50 rounded-lg p-1 inset-shadow-sm inset-shadow-rose-500" onclick={() => {onTab = "My Project"}}> Project </button>
					<button class="bg-zinc-700/50 rounded-lg p-1 inset-shadow-sm inset-shadow-rose-500" onclick={() => {onTab = "Links"}}> Links </button>
				</div>
				{#if onTab === "My Project"}
					<div class="Project-tab rounded-lg inligne h-200">

						<Project title="Lol build" text="help you build your item" link="lol"></Project>
						<Project title="Bingo" text="custom game challenge" link="bingo"></Project>
						<Project title="Archipelago" text="test archipelago game" link="archipelago"></Project>
						<!--<button class="felx bg-blue-700 rounded-lg h-8 w-16"> Join </button>-->
						
					</div>
				{:else if onTab === "Links"}

					<div class="Project-tab flex rounded-lg inligne overflow-visible overflow-y-auto h-200 gap-8">
						<a class="h-24 w-24 rounded-lg bg-zinc-700/50 shadow-lg shadow-rose-500/20" href="https://github.com/Hollow-graphic">
							<img class="flex" alt="github" src="/logo/github.png" height="100%" width="100%"/>
						</a>
						<button use:clickToCopy={'adam.autin@epitech.eu'} class="h-24 w-24 rounded-lg bg-zinc-700/50 shadow-lg shadow-rose-500/20">
							<img class="flex" alt="github" src="/logo/gmail.png" height="100%" width="100%"/>
						</button>
						<button use:clickToCopy={'hollow_craft'} class="h-24 w-24 rounded-lg bg-zinc-700/50 shadow-lg shadow-rose-500/20">
							<img class="flex" alt="github" src="/logo/discord.png" height="100%" width="100%"/>
						</button>
						<a class="h-24 w-24 rounded-lg bg-zinc-700/50 shadow-lg shadow-rose-500/20" href="https://steamcommunity.com/profiles/76561198385279682/">
							<img class="flex" alt="steam" src="/logo/steam.png" height="100%" width="100%"/>
						</a>
					</div>

				{:else}
					<div class="Project-tab h-[50vh] rounded-lg inligne overflow-visible overflow-y-auto ">
						<Block>
							<div class="font-bold p-1">Current Activity:</div>
							<div class="item-center border-l border-zinc-400 border"></div>
							<div class="p-2">
								<GlichedText text={'Studying at Epithech. First year of three.\nLearning TS and working on this page'}></GlichedText>
							</div>
						</Block>
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<button class="absolute bg-zinc-700/80 shadow-lg shadow-rose-500/50 h-[80vh] w-24 right-0 bottom-0" onclick={() => {onBigTab = "Main"; ontab = "About Me"}}>
		</button>
		<div class="flex gap-8">
			<img class="absolute z-30 rotate-[-1deg] h-full w-auto max-w-none object-contain -translate-x-[1000px] -translate-y-[10vh] pointer-events-none" alt="github" src="/img/page.png"/>
			<div class="absolute bottom-0 left-0 z-20 grid grid-rows-2">
				<button class="h-48 w-[72] translate-x-[145vh] translation-y-[192px] z-20" onclick={() => onTab = "Achivements"}>
					<img class="bookmark flex z-20 hover:translate-x-[20px] hover:translate-y-[2px]" alt="github" src="/img/journal/Memories.png" height="100%" width="100%"/>
				</button>
				<button class="h-48 w-[72] translate-x-[145vh] translation-y-[48px] z-20" onclick={() => onTab = "DailyReport"}>
					<img class="bookmark flex z-20 hover:translate-x-[20px] hover:translate-y-[2px]" alt="github" src="/img/journal/DailyReport.png" height="100%" width="100%"/>
				</button>
			</div>
			<div class="absolute bottom-0 left-0  z-40 h-[90vh] w-[140vh] rotate-[-1deg]">
				{#if onTab === "DailyReport"}
					<div class="top-0 left-0 m-4 text-5xl text-zinc-900 translate-x-[10vh]">
						DAILY REPORT
					</div>
					<div class="bg-zinc-800/10 h-96 w-[118vh] translate-y-[64px] grid grid-cols-4 gap-8">
						<Pocket title="Walking" cart="a"></Pocket>
					</div>
				{:else}
				<div class="top-0 left-0 m-4 translate-x-[10vh]">
					<div class="text-5xl text-zinc-900">
						MEMORIES
					</div>
					<div class="bg-zinc-800/10 h-96 w-[118vh] translate-y-[64px] grid grid-cols-4 gap-8">
						<Pocket title="Walking" cart="a"></Pocket>
						<Pocket title="Cloud Jumping" cart="b"></Pocket>
						<Pocket title="Playing" cart="c"></Pocket>
						<Pocket title="Final Goodbye" cart="d"></Pocket>
						<Pocket title="" cart="default"></Pocket>
						<Pocket title="" cart="default"></Pocket>
						<Pocket title="" cart="default"></Pocket>
						<Pocket title="" cart="default"></Pocket>
					</div>
				</div>
				{/if}
			</div>
		</div>
	{/if}
</main>