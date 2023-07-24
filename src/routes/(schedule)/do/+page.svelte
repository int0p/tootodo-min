<script lang="ts">
import {Editor, TodoList} from "$components";
import {SelectDateSmall} from "$components/index.ts";
import DailyLog from "$schedule/dailyLog/[date]/+page.svelte";
import SideShell from "$schedule/SideShell.svelte";
import {currentTime} from "$stores/time";
import {BreadcrumbDo} from "$components";
export let showDailyLog = true;
let showWeekly=false;
let showCalendar=true;

</script>

<div class="flex-col items-center justify-center w-full h-full relative">
    <div class="h-10 w-full">
        <BreadcrumbDo bind:showDailyLog/>
    </div>

    <div class="flex w-full h-[calc(100%-4.5rem)] ">
        {#if showDailyLog}
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
                    <textarea class="w-full h-[calc(100%-46px)] absolute bottom-0 border-0 rounded-xl
                    bg-white/90 dark:bg-black/60 dark:text-white">Diary</textarea>
                </div>
            </div>
        {:else}
                <div class="w-full  h-full bg-white/40 dark:bg-black/30 relative -top-1 border-0  rounded-xl"
                >
                    <div class="absolute left-3 top-3 text-xl font-semibold">tooltip</div>
                    <textarea class="w-full h-[calc(100%-46px)] absolute bottom-0 border-0 rounded-xl
                        bg-white/90 dark:bg-black/60 dark:text-white">Note</textarea>
                </div>
            {/if}
    </div>
</div>



<style>
    .dailyTodo{
        @apply rounded-r-2xl rounded-l-none border-double border-4 border-primary-400;
    }
</style>