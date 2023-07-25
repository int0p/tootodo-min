<script>
import {currentTime} from "$stores/time.ts";
import {TableOfContents} from "@skeletonlabs/skeleton";
import {Blinds, LampDesk, Plus} from "lucide-svelte";
import {page} from "$app/stores";
export let showDailyLog;

</script>
<!--sidebar toggle하는 녀석땜에 left-7 -->
<div class="w-full h-full relative left-7">
    <ol class="breadcrumb relative h-full">
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

<!--        show daily log-->
        <li><button on:click={()=>showDailyLog = true} >
            {$currentTime.shortDate}
        </button></li>
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

<!--        show todo detail-->
        <li class="crumb"><button on:click={()=>showDailyLog = false} class="anchor">
            select todo! {$page.url.pathname}
        </button></li>

    </ol>
</div>

