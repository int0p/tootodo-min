<script>
import {currentTime} from "$lib/stores/time.ts";
import {TableOfContents} from "@skeletonlabs/skeleton";
import {LampDesk, Blinds} from "lucide-svelte";
import {goto} from "$app/navigation";
import {page} from "$app/stores";
export let showTargetTodoList;
export let showDailyLog;
</script>

<div class="w-full h-full">
    <ol class="breadcrumb relative h-full">
        <li class="crumb anchor"><button on:click={()=>showTargetTodoList = !showTargetTodoList} class:flip={showTargetTodoList}>
            <LampDesk size="20px" class="dark:shadow-lg dark:shadow-primary-300" />
        </button></li>
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

        <li><button on:click={()=>showDailyLog = true} >
            {$currentTime.shortDate}
        </button></li>
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

        <li class="crumb"><button on:click={()=>showDailyLog = false} class="anchor">
            select todo! {$page.url.pathname}
        </button></li>

        {#if !showDailyLog}
            <button type="button" class="btn-icon variant-ghost-primary absolute right-0 !rounded-b scale-[80%] ">
                <Blinds strokeWidth=1.5/>
                <TableOfContents target="#toc-target" />
            </button>
        {/if}
    </ol>
</div>


<style>
    .flip{
        transform: scaleX(-1);
    }
</style>