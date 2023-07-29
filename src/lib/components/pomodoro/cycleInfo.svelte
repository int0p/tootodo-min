<script lang="ts">
    import {settings} from "$stores/useLocStorage.js";
    import {onMount, onDestroy,getContext} from "svelte";

    import moment from "moment";
    import {pomoKey} from "./pomodoro.js";
    $:pomoInfo= getContext(pomoKey);

    let startTime = "--:--";
    let endTime = "--:--";
    export let pausedTime;

    onMount(()=>{
        startTime = moment().format('hh:mm');
        endTime = moment().add($settings.working * $settings.repeat + $settings.breaking*($settings.repeat-1), 'minutes').format('hh:mm');
    });


    $:{
        // switch($pomoInfo.timerStatus){
        //     case "IDLE":
        //         pausedTime = 0;
        //         cycle = 1;
        //         break;
        //     case "WORKING":
        //         cycleStartTime = moment().format('hh:mm');
        //         cycleEndTime = moment().add($settings.working, 'minutes').format('hh:mm');
        //         break;
        //     case "BREAKING":
        //         cycleStartTime = moment().format('hh:mm');
        //         cycleEndTime = moment().add($settings.breaking, 'minutes').format('hh:mm');
        //         break;
        // }
    }
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
    <div class="text-[18px] w-full h-1/2 font-digital font-bold  ">
        {#if $pomoInfo.isRunning}
            {$pomoInfo.cycle.start}  - {$pomoInfo.cycle.end}
        {:else}
            {pausedTime}
        {/if}
    </div>
    <div class="text-[18px] w-full h-1/2 font-digital font-bold text-[#6a151c] ">{startTime} - {endTime} </div>
</div>
