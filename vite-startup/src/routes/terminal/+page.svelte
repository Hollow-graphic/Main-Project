<script lang="ts">
    import { goto } from "$app/navigation";


    let output: string = $state("");
    let input: string = $state("")
    let log: string[] = $state(["type /help for more information"]);
    const user: string = "admin";
    const dir: string = "Desktop";
    let last_command: string = ""
    let hasUnlockX: Boolean = false;

    async function send() {
        if (hasUnlockX && input == "exit") { window.location.href = window.location.href.slice(0, -9) };
        const response = await fetch("/api/sendTs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input: hasUnlockX? input : input.replaceAll("x", "")
            })
        });
        const data: string = await response.json();
        log.push(user + "/" + dir  + "> " + (hasUnlockX? input : input.replaceAll("x", "")) + " [" + response.status + "] " + JSON.stringify(data));
        last_command = input;
        input = ""
    }

    function keyPress(ev: KeyboardEvent) {
        if (ev.key === 'Enter') send();
        if (ev.key === 'ArrowUp') input = last_command;
        if (ev.key === 'Tab') {log.push("There is no Tab, do you really think you was in a real console? seriously !?")};
    }
</script>

<svelte:window
	onkeydown={(ev) => keyPress(ev)}
/>

<main>
    <div class="font-['Monaco-bold'] text-5xl">
        <input id="terminal" class="absolute h-full w-full bg-[rgba(0,0,0,0)] text-[0px] z-0" bind:value={input}>
        <div class="h-[95vh] w-full overflow-visible overflow-y-auto z-10 scrollbar-thin">
            {#each log as l}
                <div class="z-10">
                    {l}
                </div>
            {/each}
            {user + "/" + dir + "> " + (hasUnlockX? input : input.replaceAll("x", ""))}
        </div>
    </div>
</main>