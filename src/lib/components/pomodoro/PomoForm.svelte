<script>
    // import {defaultTimerSet as defaultTimer} from "$stores/defaultSet.ts";
    import {settings} from "$stores/useLocStorage.js";
    // import settings from "$stores/settings.js";
    import {onMount,onDestroy} from "svelte";
    import {browser} from "$app/environment";
    import {RotateCcw} from "lucide-svelte";
    export let timerIDLE;

    let timerDefaultSet;

    let timerSet = {
        dayStartTime: "07:00",
        dayEndTime: "23:00",
        repeat: 5,
        working: 25,
        breaking: 5,
        alarmSession: true,
        alarmDone: true,
        bgm: null,
    };

    onMount(()=>{
        timerDefaultSet = {...$settings};
        timerSet = {...timerDefaultSet};
    }); //$settings의 디폴트값  전달.


    //저장하지 않고 종료시 초기화
    let set=false; //저장 여부 확인

    onDestroy(()=>{
        timerSet = {...timerDefaultSet};
    });

    $:{
        console.log(timerDefaultSet);
        console.log(timerSet.working);
    }
</script>

<form class="flex-col w-full h-full p-5 " action="#"
      on:mouseleave={() => {if(!set) timerSet = {...timerDefaultSet}}}
>
    <h3 class="mb-4 text-xl font-medium">Timer Settings</h3>

    <div class="flex w-full justify-between space-x-3">
        <label class="space-y-2 w-1/3">
            <span class="title">반복횟수</span>
            <input type="number" name="repeat time" min="1" max="20" required class="w-full"
                   bind:value={timerSet.repeat}
            />
        </label>
        <div class="flex-col w-2/3">
            <label class="space-y-2 w-full">
                <span class="title">공부 시간 [{timerSet.working}분]</span>
                <input type="range" name="day start time"  required max="120"
                       bind:value={timerSet.working} step="5"
                />
            </label>
            <label class="space-y-2 w-full">
                <span class="title">쉬는 시간 [{timerSet.breaking}분]</span>
                <input type="range" name="day end time" required max="30"
                       bind:value={timerSet.breaking} step="5"
                />
            </label>
        </div>
    </div>

    <div class="w-full space-y-2">
        <span class="title">알람</span>
        <div class="flex-col w-full space-y-2">
            <div class="w-full flex space-x-3">
                <div class="flex w-1/2 justify-between space-x-2">
                    <label class="space-y-2 w-full">
                        <span>session 전환시</span>
                    </label>
                    <input bind:checked={timerSet.alarmSession}
                            type="checkbox" size="sm" class="w-5 h-5 input
                            checked:bg-surface-400-500-token dark:bg-surface-100"
                    />
                </div>
                <div class="flex w-1/2 justify-between space-x-2">
                    <label class="space-y-2 w-full">
                        <span>타이머 종료시</span>
                    </label>
                    <input checked={timerSet.alarmDone}
                            type="checkbox" size="sm" class="w-5 h-5 input
                            checked:bg-surface-400-500-token dark:bg-surface-100"
                    />
                </div>
            </div>

            <input  class="input w-full h-full !text-surface-900 rounded-2xl variant-soft-surface mt-2"  type="file" accept="audio/*"
                   bind:value={timerSet.bgm}
            />
        </div>
    </div>

    <div class="flex w-full justify-between space-x-2 mt-5 border-t-2 pt-4 border-tertiary-500">
        <button class="w-1/4 rounded-full variant-glass-primary btn !text-primary-900 " on:click={()=>{
            timerSet = {...timerDefaultSet};
            set=false;
        }}>
            <RotateCcw size={18} strokeWidth={3} />
        </button>
        <button class="w-3/4 shadow py-2 variant-soft-tertiary dark:text-tertiary-900 text-lg font-bold leading-5" on:click={()=>{
            $settings = {...timerSet};
            timerIDLE=false;
            set=true;
        }} >Start!</button>
    </div>
</form>

<style>
    .title{
        @apply font-bold;
    }
</style>