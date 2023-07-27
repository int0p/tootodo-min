<script>
    // import {defaultTimerSet as defaultTimer} from "$stores/defaultSet.ts";
    import {timerSetting} from "$stores/useLocStorage.js";
    // import timerSetting from "$stores/timerSetting.js";
    import {onMount} from "svelte";
    import {browser} from "$app/environment";
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
        timerDefaultSet = {...$timerSetting};
        timerSet = {...timerDefaultSet};
    }); //$timerSetting의 디폴트값  전달.

    $:{
        // console.log(timerDefaultSet);
        // console.log(timerSet.working);
    }

</script>

<form class="flex-col w-full h-full " action="#">
    <h3 class="mb-4 text-xl font-medium">Timer Settings</h3>

<!--    <div class="flex w-full justify-between space-x-3">-->
<!--        <label class="space-y-2 w-1/2 ">-->
<!--            <span class="title">하루 시작 시간</span>-->
<!--            <input type="time"  name="day start time" placeholder="AM 07:00" required-->
<!--                   bind:value={timerSet.dayStartTime}/>-->
<!--        </label>-->
<!--        <label class="space-y-2 w-1/2">-->
<!--            <span class="title">하루 끝 시간</span>-->
<!--            <input type="time" name="day end time" placeholder="PM 11:00" required-->
<!--                   bind:value={timerSet.dayEndTime}/>-->
<!--        </label>-->
<!--    </div>-->

    <div class="flex w-full justify-between space-x-3">
        <label class="space-y-2 w-1/3">
            <span class="title">반복횟수</span>
            <input type="number" name="repeat time" min="1" max="20" required
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

            <input  class="w-full input"  type="file" accept="audio/*"
                   bind:value={timerSet.bgm}
            />
        </div>
    </div>

    <div class="flex w-full justify-between space-x-2 mt-8">
        <button type="button" class="w-1/3" on:click={()=>timerSet = timerDefaultSet}>초기화</button>
        <button type="submit" class="w-2/3" on:click={()=>{
            $timerSetting = {...timerSet};
            timerIDLE=false;
        }} >시작</button>
    </div>
</form>

<style>
    .title{
        @apply font-bold;
    }
</style>