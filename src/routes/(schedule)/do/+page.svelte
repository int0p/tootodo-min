<script lang="ts">
import {Editor} from "$components";
import DailyLog from "$schedule/dailyLog/[date]/+page.svelte";
import {currentTime} from "$stores/time";
import {BreadcrumbDo} from "$components";
import {TableOfContents} from "@skeletonlabs/skeleton";
import {Blinds} from "lucide-svelte";
export let showDailyLog = true;
</script>

<div class="flex-col space-y-2 items-center justify-center w-full h-full relative">
    <div class="h-10 w-full">
        <BreadcrumbDo bind:showDailyLog/>
    </div>

    <div class="flex w-full h-[calc(100%-50px)]">
        {#if showDailyLog}
            <!--ten M planner-->
            <div class="w-1/3 min-w-[320px] max-w-[360px] h-full">
                <DailyLog/>
            </div>

<!--            detail daily log-->
            <div class="flex-col relative w-full h-full ml-4 mt-0.5">
                <div class="flex space-x-2 absolute right-0 top-1 text-lg z-10">
                    <code class="relative bottom-1.5 code text-lg font-digital font-bold">5H 30M</code>
                </div>
                <div class="w-full  h-full bg-white/40 dark:bg-black/30  relative  border-0  rounded-xl"
                    >
                    <div class="absolute left-3 top-3 text-xl font-semibold">{$currentTime.fullDate}</div>
                    <textarea class="w-full h-[calc(100%-46px)] absolute bottom-0 border-0 rounded-xl
                                            text-surface-900-50-token bg-white/75 dark:bg-black/50">Diary</textarea>
                </div>
            </div>
        {:else}
            <!--            editor-->
            <div class="w-full  h-full bg-white/40 dark:bg-black/30 relative border-0  rounded-xl mt-0.5"
                >
                <div class="absolute left-3 top-3 text-xl font-semibold">tooltip</div>
                <textarea class="w-full h-[calc(100%-46px)] absolute bottom-0 rounded-xl
                    border-0 border-t border-primary-400-500-token
                    text-surface-900-50-token bg-white/75 dark:bg-black/50">Note</textarea>
            </div>

            <button type="button" class="btn-icon variant-ghost-primary absolute right-2 top-[3.6rem] scale-[85%] !rounded-b lg:top-[3.4rem] lg:scale-[98%] ">
                <Blinds strokeWidth=1.5 size={26}/>
                <TableOfContents target="#toc-target" />
            </button>
            {/if}
    </div>
</div>

