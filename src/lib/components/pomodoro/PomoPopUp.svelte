<script>
    import Outline from "./outline.svelte";
    import Goal from "./goalRecord.svelte";
    import CycleInfo from "./cycleInfo.svelte";
    import Hour from "./hourRecord.svelte";
    import {ArrowBigRightDash} from "lucide-svelte";
    import {settings} from "$stores/useLocStorage.js";
    import {browser} from "$app/environment";

    ///////////////////// timer design  ///////////////////////
    const classGoal = "absolute top-2 left-0 w-full z-10 ";
    const classHour = "absolute top-12 left-0 w-full z-30";
    const classOutline = "absolute top-0 w-full z-20 ";
    const widthGoal = "w-[95%]";
    const widthHour = "w-2/3";

    ///////////////////// timer operation  ///////////////////////
    import {onMount, getContext, onDestroy} from "svelte";
    import moment from "moment";
    import {pomoKey,getFriendlyTime} from "./pomodoro.js";
    $:pomoInfo= getContext(pomoKey);

    let playInterval = null;
    let pauseInterval = null;
    let pausedTime = 0;
    let totalPausedTime = 0;
    let totalStudyTime = 0;

    onMount(()=>{
        // 타이머 초기화 (IDLE -> WORKING)
        pausedTime = 0;
        totalPausedTime = 0;
        totalStudyTime = 0;
        $pomoInfo.isRunning = true;
        $pomoInfo.startTime = moment().format('hh:mm');
        $pomoInfo.endTime = moment().add($settings.working * $settings.repeat + $settings.breaking*($settings.repeat-1), 'minutes').format('hh:mm');
        $pomoInfo.timerStatus = "WORKING";
        $pomoInfo.timeLeft = $settings.working * 60;
        $pomoInfo.cycles = [];
        $pomoInfo.cycle.count = 1;
        $pomoInfo.cycle.start = moment().format('hh:mm');
        $pomoInfo.cycle.end= moment().add($settings.working, 'minutes').format('hh:mm');
        startInterval();
    });

    onDestroy(()=>{
        terminateTimer();
    });

    function terminateTimer(){
        clearInterval(playInterval);
        $pomoInfo.endTime = moment().format('hh:mm');
        saveCycle();
        //todo cycles[] DB저장
        $pomoInfo.cycles = [];
        $pomoInfo.isRunning = false;
        $pomoInfo.timerStatus = "IDLE";
    }
    function startInterval(){
        playInterval = setInterval(()=>{
            $pomoInfo.timeLeft--;
            if($pomoInfo.timeLeft <= 0){
                switchSession();
            }
        }, 1000)
    }
    function toggleRunning(){
        totalPausedTime += pausedTime;
        pausedTime = 0;
        clearInterval(pauseInterval);
        if($pomoInfo.isRunning) {
            $pomoInfo.isRunning = false;
            clearInterval(playInterval);
            pauseInterval = setInterval(()=>{
                pausedTime++;
            }, 1000);
        }
        else{
            $pomoInfo.isRunning = true;
            startInterval();
        }
    }
    function saveCycle(){
        $pomoInfo.cycles[$pomoInfo.cycle.count-1] = {
            start: $pomoInfo.cycle.start,
            end: moment().format('hh:mm'),
            studyTime: $settings.working*60 - $pomoInfo.timeLeft - totalPausedTime,
        };
    }
    function switchSession(){
        if($pomoInfo.timerStatus === "WORKING") {
            clearInterval(playInterval);
            saveCycle();
            //breaking session에서 working session으로 넘어왔는데, cycle을 다 돌았다면,
            // breaking session을 진행하지 않고 타이머 종료.
            if($pomoInfo.cycle.count >= $settings.repeat) {
                terminateTimer();
                return;
            }
            $pomoInfo.isRunning = true;
            $pomoInfo.timerStatus = "BREAKING";
            $pomoInfo.cycle.start = moment().format('hh:mm');
            $pomoInfo.cycle.end= moment().add($settings.breaking, 'minutes').format('hh:mm');
            $pomoInfo.timeLeft = $settings.breaking * 60;
            totalPausedTime = 0;
            startInterval();
        }
        else if($pomoInfo.timerStatus === "BREAKING") {
            clearInterval(playInterval);
            $pomoInfo.cycle.count++; //breaking session에서 working session으로 전환시 count 증가
            $pomoInfo.isRunning = true;
            $pomoInfo.timerStatus = "WORKING";
            $pomoInfo.cycle.start = moment().format('hh:mm');
            $pomoInfo.cycle.end= moment().add($settings.working, 'minutes').format('hh:mm');
            $pomoInfo.timeLeft = $settings.working * 60;
            totalPausedTime = 0;
            startInterval();
        }
    }

</script>

<div class="clock w-full h-full mb-3 mx-auto">
<!--    pomodoro UI-->
    <div class="w-full relative top-0 aspect-square shadow opacity-90">
        <!--    session, remain time : isRunning, timeLeft 사용-->
        <div class="w-[160px] h-[70px] absolute translate-x-[3.95rem] translate-y-[6.7rem] z-50 opacity-100"
        >
            <button class="w-full h-full flex-col items-center justify-center py-1 m-auto divide-y-2 divide-white !bg-rose-950 !rounded-2xl border-emerald-800 border-4 "
                    on:click={toggleRunning}>
                <span class="text-[19px] w-full h-1/2 font-digital font-bold text-white absolute left-0 top-2">{getFriendlyTime($pomoInfo.timeLeft)}</span>
                <span class="text-[19px] w-full h-1/2   font-digital font-bold text-emerald-500 absolute left-0 bottom-0"> {$pomoInfo.timerStatus}</span>
            </button>
        </div>

        <!--    timer: isRunning, timeLeft 사용 -->
        <Goal {classGoal} {widthGoal}/>
        <Hour {classHour} {widthHour}/>
        <Outline {classOutline} />

<!--        next session: timerStatus변경-->
        <button class="absolute bottom-0 right-1 z-50"
                on:click={switchSession}
        >
            <ArrowBigRightDash color="#6a151c" size={38} class="fill-[#6a151c]" />
        </button>

<!--        turn back setting: timerStatus변경-->
        <button class="absolute top-0 left-1 z-50 rotate-180"
                on:click={terminateTimer}
        >
            <ArrowBigRightDash color="#a3202c" size={38} class="fill-[#a3202c] " />
        </button>
    </div>

    <hr class="!border-t-8 mt-1 !border-double !border-zinc-600" />

    <!--  goal, curret cycle 정보: isRunning, cycle정보 사용 -->
    <div class="w-full h-[60px] p-2 flex justify-around">
        {#if browser}
            <CycleInfo pausedTime = {getFriendlyTime(pausedTime)}/>
        {/if}
    </div>
</div>

<style>
    .clock {
        border-radius: 10%;
        border: 9px solid rgb(55, 55, 55);
        padding: 8px;
        box-shadow: inset 0 0 5px 5px ,
            inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
        /*background-color: rgba(247, 244, 245, 0.4);*/

        width: 320px;
        height: 400px;
    }
</style>