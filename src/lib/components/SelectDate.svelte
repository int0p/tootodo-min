<script lang="ts">
    import { CalendarRange} from 'lucide-svelte';
    import moment from "moment";
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN'];
    // let week = ['일', '월', '화', '수', '목', '금', '토'];
    $: isTodayDay = (week) => {
        if (week == moment().week()) return true;
        else return false;
    };
</script>

<div class="flex w-full justify-center space-x-2 font-bold uppercase">
    <!--            choose another date-->
    <button class="chip variant-soft-secondary w-1/12 flex-col items-center text-lg px-2">
        <CalendarRange size="22" />
    </button>
    <!--            yesterday-->
    <button
            class="chip bg-gradient-to-bl variant-gradient-primary-secondary w-1/3 uppercase flex-col justify-center items-center"
    >
        {moment().subtract(1, 'day').format('ddd')}
        <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2"
        >{moment().subtract(1, 'day').format('D')}</span
        >
    </button>
    <!--            today -->
    <button
            class="chip bg-primary-200 dark:bg-primary-300 w-1/2 uppercase flex-col justify-center items-center border-double border-4 border-primary-500 py-1 text-black"
    >
        {moment().format('ddd')}
        <span class="variant-filled border-primary-400 text-xs w-full rounded-md border-t-2"
        >{moment().format('D')}</span
        >
    </button>
    <!--            tomorrow-->
    <button
            class="chip bg-gradient-to-br variant-gradient-primary-secondary w-1/3 uppercase flex-col justify-center items-center"
    >
        {moment().add(1, 'day').format('ddd')}
        <!--todo: 오늘이 29,30,31일 때 내일은?-->
        <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2"
        >{moment().add(1, 'day').format('D')}</span
        >
    </button>
    <!--            weekly plan-->
    <button
            class="chip variant-soft-secondary w-1/12 uppercase flex-col justify-center items-center divide-y-2"
    >
        W
        <span>-{moment().weeks()}</span>
    </button>
</div>
