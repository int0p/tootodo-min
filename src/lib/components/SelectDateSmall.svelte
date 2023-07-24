<script lang="ts">
    import { currentTime } from '$lib/stores/time.ts';
    import { CalendarRange} from 'lucide-svelte';
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN'];
    // let week = ['일', '월', '화', '수', '목', '금', '토'];
    $: isTodayDay = (week) => {
        if (week == $currentTime.day) return true;
        else return false;
    };
    export let showWeekly=false;
    export let showCalendar=true;
</script>

<div class="flex w-full justify-center space-x-2 font-bold uppercase mx-2">
    <!--            choose another date-->
    <button class="chip variant-soft-primary w-1/6 flex-col items-center text-lg px-2">
        <CalendarRange size="22" />
    </button>

    <!--    week-->
    <button
            class="chip variant-soft-secondary w-1/5 uppercase flex-col justify-center items-center divide-y-2"
            on:click={()=>{
                showWeekly=true;
            }}
    >
        W
        <span>{$currentTime.week}</span>
    </button>

    <!--    date-->
    <button
            class="chip bg-gradient-to-br variant-gradient-secondary-primary w-5/6 uppercase flex-col justify-center items-center"
            on:click={()=>{
                showWeekly=false;
            }}
    >
        <div class="flex w-full h-full justify-center items-center space-x-2">
            <div class="text-lg text-white">{week.at($currentTime.day)}</div>
            <div class="bg-white/50 text-black border-primary-400 text-lg w-full h-full rounded-md border-t-2">
                {$currentTime.date}
            </div>
        </div>
    </button>

</div>
