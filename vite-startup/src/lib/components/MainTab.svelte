<script lang="ts">
    import { goto } from '$app/navigation';
    let { title } = $props();
</script>

<button class="bg-zinc-700/50 rounded-lg p-1 inset-shadow-sm inset-shadow-rose-500" onclick={() => {onTab = title}}> {title} </button>