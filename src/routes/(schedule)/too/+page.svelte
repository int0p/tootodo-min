<script lang="ts">

    import {currentTime} from "$lib/stores/time";

</script>

<div class="flex w-full mb-2 justify-center space-x-2 font-bold scale-95">
    <button class="chip variant-soft-success w-1/3 uppercase flex-col justify-center items-center" >
        Done
        <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date-1}</span>
    </button>

    <button class="chip variant-soft-secondary w-1/3 uppercase flex-col justify-center items-center border-double border-4 border-primary-500 py-1 text-black" >
        In progress
        <span class="variant-filled border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date}</span>
    </button>

    <button class="chip variant-soft-surface w-1/3 uppercase flex-col justify-center items-center" >
        Not started
        <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date+1}</span>
    </button>
</div>

