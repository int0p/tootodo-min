<script>
// import {currentTime} from "$stores/time.ts";
import moment from "moment";
import {selectedDate} from "$stores/useLocStorage.js";
import {page} from "$app/stores";
import {onMount} from "svelte";
export let showDailyLog;

</script>
<!--sidebar toggle하는 녀석땜에 left-7 -->
<div class="w-full h-full relative left-7 top-1">
    <ol class="breadcrumb relative h-full">
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

<!--        show daily log-->
        <li><button on:click={()=>showDailyLog = true} >
            {moment($selectedDate).format('MMM Do')}
        </button></li>
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

<!--        show todo detail-->
        <li class="crumb"><button on:click={()=>showDailyLog = false} class="anchor">
            select todo! {$page.url.pathname}
        </button></li>

    </ol>
</div>

