<script>
    import Outline from "./outline.svelte";
    import Goal from "./goalRecord.svelte";
    import Hour from "./hourRecord.svelte";
    import Controller from "./controller.svelte";
    import Status from "./status.svelte";

    ///////////////////// timer design  ///////////////////////
    const classGoal = "absolute top-[0.6rem] left-0 w-full z-10 opacity-70";
    const classHour = "absolute top-[3.2rem] left-0 w-full z-20 opacity-80";
    const classOutline = "relative w-full z-50 p-1";
    const widthGoal = "w-[92%]";
    const widthHour = "w-[63%]";
</script>

<div class="clock relative w-full h-full ">
<!--    <div class="absolute left-0 opacity-70 z-10"></div>-->
    <div class="absolute w-1/2 h-1/5 top-1/3 left-1/4 z-30">
        <Status/>
    </div>
<!--    timer -->
    <Goal {classGoal} {widthGoal}/>
    <div class="absolute rounded-full w-[74%] aspect-square bg-white z-10 translate-y-7 translate-x-7 opacity-90"></div>
    <Hour {classHour} {widthHour}/>
    <Outline {classOutline} />
<!--    controller -->
    <hr class="!border-t-8 mt-1 !border-double" />
    <div class="w-full h-1/5">
        <Controller />
    </div>
</div>

<style>
    .clock {
        border-radius: 16%;
        border: 12px solid rgb(55, 55, 55);
        padding: 8px;
        box-shadow: inset 0 0 3px 3px #52525b,
            inset 0 0 1px 2px rgba(50, 50, 50, 0.2);
        background-color: rgba(247, 244, 245, 0.4);
        width: 300px;
        height: 360px;
    }

</style>