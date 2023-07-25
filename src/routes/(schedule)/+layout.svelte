<script>
    import {TodoList} from "$components";
    import BreadCrumb from "$components/BreadcrumbDo.svelte";
    import SideShell from "$schedule/SideShell.svelte";
    import {SelectDateSmall} from "$components/index.ts";
    import {LampDesk} from "lucide-svelte";

    let showTargetTodoList = true;
    let showWeekly=false;
    let showCalendar=true;
</script>

<div class="flex w-full h-full relative">

    {#if showTargetTodoList}
        <!--290px-->
        <SideShell>
            <svelte:fragment slot="navi"><SelectDateSmall bind:showWeekly bind:showCalendar/></svelte:fragment>
            <svelte:fragment slot="content"><TodoList {showWeekly} {showCalendar}/></svelte:fragment>
        </SideShell>
    {/if}

    <div class="flex-col items-center justify-center w-full h-full relative" class:reduceWidth={showTargetTodoList}>
        <button on:click={()=>showTargetTodoList = !showTargetTodoList} class:flip={showTargetTodoList}
                class="absolute left-0 top-2 z-10 anchor"
        >
            <LampDesk size="20px" class="dark:shadow-lg dark:shadow-primary-300" />
        </button>

        <slot />
    </div>
</div>

<style>
    .reduceWidth{
        width: calc(100%- 290px);
        overflow: hidden;
    }

    .flip{
        transform: scaleX(-1);
    }
</style>
<!--    <div class="flex-col w-1/3 h-full relative min-w-[330px] max-w-[380px]">-->
<!--        <slot/>-->
<!--    </div>-->

<!--    &lt;!&ndash;        editor&ndash;&gt;-->
<!--    <div class="w-3/4 ml-2 h-full">-->
<!--        <Editor/>-->
<!--    </div>-->

<!--    <div class="absolute right-0 timer ">-->
<!--&lt;!&ndash;        <PomoTimer/>&ndash;&gt;-->
<!--    </div>-->

<!--<style lang="scss">-->
<!--    .timer{-->
<!--          @include breakpoint.down('xl') {-->
<!--            visibility: hidden;-->
<!--          }-->
<!--    }-->
<!--    .editor{-->
<!--      @include breakpoint.up('xl') {-->
<!--        width: calc(100% - 770px);-->
<!--      }-->
<!--    }-->
<!--</style>-->


