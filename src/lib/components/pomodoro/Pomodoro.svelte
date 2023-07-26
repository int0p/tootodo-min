<script>
    import Outline from "./outline.svelte";
    import Goal from "./goalRecord.svelte";
    import Hour from "./hourRecord.svelte";
    import Controller from "./controller.svelte";
    import Status from "./status.svelte";

    ///////////////////// timer design  ///////////////////////
    const classGoal = "absolute top-[0.9rem] left-0 w-full z-10 opacity-70";
    const classHour = "absolute top-[3.3rem] left-0 w-full z-20 opacity-80";
    const classOutline = "relative w-full z-50";
    const widthGoal = "w-[90%]";
    const widthHour = "w-[65%]";
</script>

<div class="clock relative w-full h-full mb-3 mx-auto">
    <div class="h-4/5 w-full">
        <div class="absolute w-1/2 h-1/5 top-1/3 left-1/4 z-30">
            <Status/>
        </div>
        <!--    timer -->
        <Goal {classGoal} {widthGoal}/>
        <div class="absolute rounded-full w-[74%] aspect-square bg-white z-10 translate-y-[1.93rem] translate-x-[1.93rem] opacity-90"></div>
        <Hour {classHour} {widthHour}/>
        <Outline {classOutline} />
        <hr class="!border-t-8 mt-1 !border-double !border-secondary-400" />
    </div>

    <!--    controller -->
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