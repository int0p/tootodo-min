<script lang="ts">
    import TenMtable from "$lib/TenMtable.svelte"
    import {Editor} from "$lib/editor";
    import DownloadIcon from "~icons/eva/downloadFill"

    import AddIcon from "~icons/eva/plus-fill"
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import {currentTime} from '$lib/stores/time.ts';

    let valueSingle: string = 'FE';
    // let week = ['M', 'T', 'W', 'T', 'F', 'S','S'];
    let week = ['월', '화', '수', '목', '금', '토','일'];
    $: isTodayDay = (week)=>{
        if(week == $currentTime.day)
            return true;
        else return false;
    }
</script>

<div class="flex-col w-full h-full">
<!--            select date-->
    <div class="flex w-full justify-center mb-2 space-x-2 font-bold uppercase">
        {#each Array(7) as _, i}
            {@const monDate = $currentTime.date - $currentTime.day +1}
            {#if i<5}
                <button class="chip variant-filled w-full uppercase flex-col justify-center items-center" class:today={isTodayDay(i+1)} >
                    {week[i%7]}
                    <span class="variant-filled border-primary-400 text-xs w-full rounded-md border-t-2">{monDate+i}</span>
                </button>
    <!--                    saturday-->
            {:else if i===5}
                <button class="chip bg-blue-600 text-white w-full uppercase flex-col justify-center items-center" class:today={isTodayDay(i+1)} >
                    {week[i%7]}
                    <span class="variant-filled-primary text-xs w-full rounded-md border-t-2">{monDate+i}</span>
                </button>
    <!--                    sunday-->
            {:else if i===6}
                <button class="chip bg-red-600 text-white w-full uppercase flex-col justify-center items-center" class:today={isTodayDay(i+1)} >
                    {week[i%7]}
                    <span class="variant-filled-primary text-xs w-full rounded-md border-t-2">{monDate+i}</span>
                </button>
            {/if}
        {/each}
    </div>

<!--        select work-->
    <hr class="!border-t-3 mb-1" />
    <div class="flex justify-between mb-2 w-full h-[56px] relative">
        <ListBox class="flex flex-wrap justify-start items-center space-x-1 w-[calc(100%-124px)] h-full overflow-y-scroll hide-scrollbar">
            <ListBoxItem bind:group={valueSingle} name="medium" value="OS" class="!py-0">OS</ListBoxItem>
            <ListBoxItem bind:group={valueSingle} name="medium" value="CS" class="!py-0">CS</ListBoxItem>
            <ListBoxItem bind:group={valueSingle} name="medium" value="Dev" class="!py-0">Dev</ListBoxItem>
            <ListBoxItem bind:group={valueSingle} name="medium" value="UI" class="!py-0">UI</ListBoxItem>
            <ListBoxItem bind:group={valueSingle} name="medium" value="FE" class="!py-0">FE</ListBoxItem>
            <ListBoxItem bind:group={valueSingle} name="medium" value="BE" class="!py-0">BE</ListBoxItem>
            <ListBoxItem bind:group={valueSingle} name="medium" value="Books" class="!py-0">Books</ListBoxItem>
        </ListBox>
        <button class="flex space-x-2 absolute top-2 right-0 scale-125"><AddIcon/><DownloadIcon/></button>
        <div class="flex space-x-2 absolute right-0 top-8 text-lg">
            <h1 class="relative -bottom-1.5 font-digital">Total</h1>
            <code class="code text-lg font-digital font-bold">5H 30M</code>
        </div>
    </div>
    <hr class="!border-b-3 mb-1.5 w-[calc(100%-130px)]" />
    <div class="w-full h-full relative">
        <TenMtable/>
    </div>
</div>

<style>
    .today{
        @apply bg-primary-200 text-black border-double border-4 py-0.5 border-primary-400;
    }
</style>