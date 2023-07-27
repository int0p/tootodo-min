<script>
    import Outline from "./outline.svelte";
    import Goal from "./goalRecord.svelte";
    import Hour from "./hourRecord.svelte";
    import Controller from "./controller.svelte";
    import Status from "./status.svelte";
    import {ArrowBigRightDash} from "lucide-svelte";

    ///////////////////// timer design  ///////////////////////
    const classGoal = "absolute top-2 left-0 w-full z-10 ";
    const classHour = "absolute top-12 left-0 w-full z-30";
    const classOutline = "absolute top-0 w-full z-20 ";
    const widthGoal = "w-[95%]";
    const widthHour = "w-2/3";
</script>

<div class="clock w-full h-full mb-3 mx-auto">
<!--    pomodoro-->
    <div class="w-full relative top-0 aspect-square shadow">
        <!--    session, remain time-->
        <div class="w-[160px] h-[70px] absolute translate-x-[3.95rem] translate-y-[6.6rem] z-50">
            <Status/>
        </div>
        <!--    timer -->
        <Goal {classGoal} {widthGoal}/>
        <Hour {classHour} {widthHour}/>
        <Outline {classOutline} />
        <button class="absolute bottom-0 right-1 z-50">
            <ArrowBigRightDash color="#4c0519" size={38} class="fill-rose-950" />
        </button>
    </div>

    <hr class="!border-t-8 mt-1 !border-double !border-zinc-600" />

    <!--  goal, current round -->
    <div class="w-full h-[60px] p-2 flex justify-around">
        <div class="flex-col h-full relative space-y-1">
            <div class="text-[19px] w-full h-1/2 font-digital font-bold  ">current
                <span class="text-[16px] absolute right-0 top-0.5 border-b-4 border-emerald-700 text-emerald-600">3 </span>
            </div>
            <div class="text-[19px] w-full h-1/2   font-digital font-bold text-emerald-500 ">goal
                <span class="text-zinc-600 text-sm">40M</span>
                <span class="text-sm text-emerald-700">* </span>
                <span class="text-zinc-600 text-sm">4</span>
            </div>
        </div>
        <div class="flex-col h-full space-y-1">
<!--            todo 타이머가 정지상태일땐 정지 시간 계산. -->
            <div class="text-[18px] w-full h-1/2 font-digital font-bold  ">88:88  - 99:99</div>
            <div class="text-[18px] w-full h-1/2 font-digital font-bold text-rose-900 ">88:88  - 99:99 </div>
        </div>

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