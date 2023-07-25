<script>
    import { AlarmClock,Maximize2 } from 'lucide-svelte';
</script>

<div class="variant-soft-tertiary px-2 rounded-md">
    <div class="chip variant-filled-tertiary py-2 ">
        <span><AlarmClock size={16} /></span>
        <span class="font-digital text-[1rem]">25:00</span>
    </div>

    <div class="chip variant-glass-tertiary  py-2 px-2
    dark:bg-tertiary-200 dark:text-black dark:opacity-70">
        <span><Maximize2 size={16} /></span>
    </div>
</div>

