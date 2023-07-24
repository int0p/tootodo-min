<script lang="ts">
import {Editor, TodoList} from "$components";
import {SelectDateSmall} from "$components/index.ts";
import DailyLog from "$schedule/dailyLog/[date]/+page.svelte";
import BreadCrumb from "$components/editor/breadcrumb.svelte";
import {currentTime} from "$stores/time";
let showTargetTodoList = true;
export let showDailyLog = true;
let showWeekly=false;
let showCalendar=true;

</script>

<div class="w-full h-full flex ">
    {#if showTargetTodoList}
        <div class="flex-col dailyTodo w-[290px] min-w-[280px] h-[calc(100%-2.2rem)] relative mr-4">
            <div class="header h-10 my-2 flex justify-between bg-none">
                <SelectDateSmall bind:showWeekly bind:showCalendar/>
            </div>
            <hr class="!border-dashed border-2 mb-2 " />
            <div class="w-full h-[clac(100%-80px)] overflow-y-auto">
                <TodoList {showWeekly} {showCalendar}/>
            </div>
        </div>
    {/if}

    <div class="flex-col items-center justify-center w-full h-[calc(100%-4.5rem)] relative">
        <div class=" h-10 w-full ">
            <BreadCrumb bind:showTargetTodoList bind:showDailyLog/>
        </div>

        {#if showDailyLog}
            <div class="flex w-full h-full">
                <div class="w-full min-w-[330px] max-w-[360px] h-[calc(100%-0.5rem)]">
                    <DailyLog/>
                </div>

                <div class="flex-col relative w-full h-full">
                    <div class="flex space-x-2 absolute right-0 text-lg z-10">
<!--                        <h1 class="relative -bottom-1 font-digital">Total</h1>-->
                        <code class="relative bottom-1.5 code text-lg font-digital font-bold">5H 30M</code>
                    </div>
                    <div class="w-[calc(100%-1rem)]  h-full bg-white/40 dark:bg-black/30 ml-4 relative -top-1 border-0  rounded-xl"
                        >
                        <div class="absolute left-3 top-3 text-xl font-semibold">{$currentTime.fullDate}</div>
                        <textarea class="w-full h-[calc(100%-46px)] absolute bottom-0 border-0 rounded-xl dark:bg-black dark:text-white">Diary</textarea>
                    </div>
                </div>
            </div>
        {:else}
            <textarea class="w-full h-full bg-white/40 border-0   rounded-xl dark:bg-black/30 dark:text-white">Note</textarea>
        {/if}

    </div>


</div>

<style>
    .dailyTodo{
        @apply rounded-r-2xl rounded-l-none border-double border-4 border-primary-400;
    }
</style>