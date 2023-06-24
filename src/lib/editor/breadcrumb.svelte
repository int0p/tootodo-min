<script>
import {currentTime} from "$lib/stores/time.ts";
import {TableOfContents} from "@skeletonlabs/skeleton";
import HomeIcon from "~icons/eva/home-fill"
import MenuIcon from "~icons/eva/menuFill"
import {goto} from "$app/navigation";

</script>

<ol class="breadcrumb relative left-3">
    <li class="crumb"><a class="anchor" href="/do"><HomeIcon transform="translate(10 1) scale(-1 1)" /></a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a class="anchor" href="/do/weekly">Week</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><a class="anchor" href="/do/daily">Day</a></li>
    <li class="crumb-separator" aria-hidden>-</li>
    <li>{$currentTime.shortDate} <span class="text-primary-500 font-bold text-lg font-digital">{$currentTime.shortTime}</span></li>
    <button type="button" class="btn-icon variant-ghost-tertiary absolute right-3 !rounded-b scale-90"><MenuIcon/><TableOfContents target="#toc-target" /></button>
</ol>