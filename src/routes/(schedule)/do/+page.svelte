<script lang="ts">
    import TenMtable from "$lib/TenMtable.svelte"

    import {currentTime} from '$lib/stores/time.ts';
    import WorkList from "$lib/WorkList.svelte";
    import AddIcon from "~icons/eva/plus-fill"
    import CalendarIcon from "~icons/eva/calendar-fill"
    import DownloadIcon from "~icons/eva/downloadFill"
    import Shell from "../ContentShell.svelte";
    let week = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRE', 'SAT'];
    // let week = ['일', '월', '화', '수', '목', '금', '토'];
    $: isTodayDay = (week)=>{
        if(week == $currentTime.day)
            return true;
        else return false;
    }
</script>

<Shell>
    <svelte:fragment slot="area">
        <div class="flex w-full justify-center space-x-2 font-bold uppercase">
<!--            choose another date-->
            <button class="chip variant-soft-secondary w-1/12 flex-col items-center text-lg px-2" >
                <CalendarIcon/>
            </button>
<!--            yesterday-->
            <button class="chip bg-gradient-to-bl variant-gradient-primary-secondary w-1/3 uppercase flex-col justify-center items-center" >
                {week.at($currentTime.day-1)}
                <!--todo: 오늘이 1일일때 어제는?-->
                <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date-1}</span>
            </button>
<!--            today -->
            <button class="chip bg-primary-200 dark:bg-primary-300 w-1/2 uppercase flex-col justify-center items-center border-double border-4 border-primary-500 py-1 text-black" >
                {week.at($currentTime.day)}
                <span class="variant-filled border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date}</span>
            </button>
<!--            tomorrow-->
            <button class="chip bg-gradient-to-br variant-gradient-primary-secondary w-1/3 uppercase flex-col justify-center items-center" >
                {week.at($currentTime.day+1)}
                <!--todo: 오늘이 29,30,31일 때 내일은?-->
                <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date+1}</span>
            </button>
<!--            weekly plan-->
            <button class="chip variant-soft-secondary w-1/12 uppercase flex-col justify-center items-center divide-y-2" >
                W
                <span>-{$currentTime.week}</span>
            </button>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="workList">
        <WorkList/>
    </svelte:fragment>

    <svelte:fragment slot="setting">
        <button class="flex space-x-2 absolute top-1.5 right-0 scale-[115%]"><AddIcon/><DownloadIcon/></button>
        <div class="flex space-x-2 absolute right-0 top-8 text-lg">
            <h1 class="relative -bottom-1.5 left-0.5 font-digital">Total</h1>
            <code class="code text-lg font-digital font-bold">5H 30M</code>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="contents">
        <TenMtable/>
    </svelte:fragment>
</Shell>

<style>
    .today{
        @apply bg-primary-200 text-black border-double border-4 border-primary-400;
    }
</style>