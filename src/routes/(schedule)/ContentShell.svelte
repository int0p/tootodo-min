
<div class="flex-col w-full h-full">
<!--    <div class="flex w-full mb-2 justify-center space-x-2 font-bold scale-95">-->
<!--        <slot name="area"/>-->
<!--    </div>-->

    <hr class="!border-t-3 mb-2 " />

    <div class="flex justify-between mb-2 w-full h-[56px] relative">
        <div class="w-[calc(100%-30px)] h-full ">
            <slot name="workList"/>
        </div>
        <div class="relative w-[30px] right-0 text-lg">
            <slot name="setting"/>
        </div>
    </div>

    <hr class="!border-b-3 mb-2 w-[calc(100%-30px)]" />

    <div class="w-full h-full relative max-h-[calc(100%-80px)] overflow-y-scroll hide-scrollbar
        border-b !border-primary-600-300-token">
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