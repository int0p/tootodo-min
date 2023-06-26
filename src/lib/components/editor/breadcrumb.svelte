<script>
import {currentTime} from "$lib/stores/time.ts";
import {TableOfContents} from "@skeletonlabs/skeleton";
import {LampDesk, Blinds} from "lucide-svelte";
import {goto} from "$app/navigation";
import {page} from "$app/stores";

</script>

<ol class="breadcrumb relative left-5">
    <li class="crumb"><a class="anchor" href="/do"><LampDesk size="20px" /></a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a class="anchor" href="/do">{$page.url.pathname}</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a class="anchor" href="/do">Day</a></li>
    <li class="crumb-separator" aria-hidden>-</li>
    <li>{$currentTime.shortDate} <span class="text-primary-500 font-bold text-lg font-digital">{$currentTime.shortTime}</span></li>
    <button type="button" class="btn-icon variant-ghost-primary absolute right-4 !rounded-b scale-[85%] "><Blinds strokeWidth=1.5/><TableOfContents target="#toc-target" /></button>
</ol>