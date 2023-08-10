<script lang="ts">
    import {settings} from "$stores/useLocStorage.js";
    import {getContext} from "svelte";
    import {pomoKey} from "./key.js";
    import {Pause} from "lucide-svelte";
    $:pomoInfo= getContext(pomoKey);

    export let pausedTime;

</script>

<!-- cycle -->
<div class="flex-col h-full relative space-y-1">
    <div class="text-[19px] w-full h-1/2 font-digital font-bold  ">Current
        <span class="text-[16px] absolute right-0 top-0.5 border-b-4 border-emerald-700 text-emerald-600">{$pomoInfo.cycle.count} </span>
    </div>
    <div class="text-[19px] w-full h-1/2   font-digital font-bold text-emerald-500 ">Goal
        <span class="text-zinc-600 text-sm">{$settings.working}M</span>
        <span class="text-sm text-emerald-700">* </span>
        <span class="text-zinc-600 text-sm">{$settings.repeat}</span>
    </div>
</div>

<!-- goal time-->
<div class="flex-col h-full space-y-1">
    <!--            todo 타이머가 정지상태일땐 정지 시간 계산. -->
    <div class="text-[18px] w-full h-1/2 font-digital font-bold  text-center">
        {#if $pomoInfo.isRunning}
            {$pomoInfo.cycle.start}  - {$pomoInfo.cycle.end}
        {:else}
            <div class="flex justify-between items-center">
                {pausedTime}
                <Pause size={20} class="fill-current" />
            </div>
        {/if}
    </div>
    <div class="text-[18px] w-full h-1/2 font-digital font-bold text-[#6a151c] text-center ">
        {$pomoInfo.startTime} - {$pomoInfo.endTime}
    </div>
</div>
