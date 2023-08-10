<script lang="ts">
    import moment from "moment";
    import { CalendarRange} from 'lucide-svelte';
    import {selectedDate} from "$stores/useLocStorage.js";
    import {onMount} from "svelte";
    onMount(()=>$selectedDate = moment().format('YYYY-MM-DD'));
    export let showWeekly=false;
    let showCalendar=false;
    let selectedDateInput:string;
    $:console.log($selectedDate);
</script>

<div class="flex w-full justify-center space-x-2 font-bold mx-2 -my-0.5 relative">
    <!--            choose another date-->
    <button class="chip variant-soft-primary w-1/6 flex-col items-center text-lg px-2"
            on:click={()=>showCalendar = !showCalendar}
    >
        <CalendarRange size="22" />
    </button>
    {#if showCalendar}
        <input type="date" bind:value={selectedDateInput}
               class="absolute -left-2 top-12 z-50"
               on:change={()=>{
                   showCalendar=false;
                   $selectedDate = selectedDateInput;
               }}
        >
    {/if}
    <!--    week-->
    <button
            class="chip variant-soft-secondary w-1/5 flex-col justify-center items-center divide-y-2 text-[0.9rem]"
            on:click={()=>{
                showWeekly=true;
            }}
    >
         [ {moment($selectedDate).weeks()} ]
    </button>

    <!--    date-->
    <button
            class="chip uppercase bg-gradient-to-br variant-gradient-secondary-primary w-3/4 uppercase flex-col justify-center items-center"
            on:click={()=>{
                showWeekly=false;
            }}
    >
        <div class="flex w-full h-full justify-center items-center space-x-2">
            <div class="text-lg text-white">{moment($selectedDate).format('ddd')}</div>
            <div class="bg-white/50 text-secondary-900 border-primary-400 leading-5 text-[1rem] w-full h-full rounded-md border-t-2">
                {moment($selectedDate).format('D')}
            </div>
        </div>
    </button>

</div>
