
<div class="flex-col w-full h-full">
    <div class="flex w-full mb-2 justify-center space-x-2 font-bold scale-95">
        <slot name="area"/>
    </div>

    <hr class="!border-t-3 mb-1 " />

    <div class="flex justify-between mb-2 w-full h-[56px] relative">
        <div class="w-[calc(100%-120px)] h-full ">
            <slot name="workList"/>
        </div>
        <div class="relative text-lg">
            <slot name="setting"/>
        </div>
    </div>

    <hr class="!border-b-3 mb-1.5 w-[calc(100%-140px)]" />

    <div class="w-full h-full relative max-h-[calc(100%-162px)] overflow-y-scroll hide-scrollbar">
        <slot name="contents"/>
    </div>
</div>

<!--IN USE-->
<!--<script>-->
<!--    import Shell from '../ContentShell.svelte';-->
<!--</script>-->
<!--<Shell>-->
<!--    <svelte:fragment slot="area">-->

<!--    </svelte:fragment>-->
<!--    <svelte:fragment slot="workList">-->
<!--        -->
<!--    </svelte:fragment>-->
<!--    <svelte:fragment slot="setting">-->

<!--    </svelte:fragment>    -->
<!--    <svelte:fragment slot="contents">-->

<!--    </svelte:fragment>-->
<!--</Shell>-->