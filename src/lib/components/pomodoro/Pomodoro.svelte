<script>
    import Outline from "./outline.svelte";
    import Goal from "./goalRecord.svelte";
    import Hour from "./hourRecord.svelte";
    import Controller from "./controller.svelte";
    import Status from "./status.svelte";
    import {ArrowBigRightDash} from "lucide-svelte";

    ///////////////////// timer design  ///////////////////////
    const classGoal = "absolute top-2 left-0 w-full   ";
    const classHour = "absolute top-11 left-0 w-full z-20 opacity-80";
    const classOutline = "absolute top-0 w-full z-10 shadow";
    const widthGoal = "w-[95%]";
    const widthHour = "w-2/3";
</script>

<div class="clock w-full h-full mb-3 mx-auto">
<!--    pomodoro-->
    <div class="w-full relative top-0 aspect-square ">
        <!--    session, remain time-->
        <div class="w-[160px] h-[70px] absolute translate-x-[3.28rem] translate-y-[6.1rem] z-50">
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

    <hr class="!border-t-8 mt-1 !border-double !border-secondary-400" />

    <!--  goal, current round -->
    <div class="w-full h-1/5">
        <Controller />
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

        width: 300px;
        height: 360px;
    }

</style>