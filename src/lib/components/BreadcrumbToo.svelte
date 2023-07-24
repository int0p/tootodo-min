<script lang="ts">
import {Blinds, LampDesk, Plus, Check} from "lucide-svelte";
import {page} from "$app/stores";
let flavors: Record<string, boolean> = {
    vanilla: true,
    chocolate: false,
    strawberry: false
};
</script>

<!--sidebar toggle하는 녀석땜에 left-7 -->
<div class="w-full h-full relative left-7">
    <ol class="breadcrumb relative h-full">
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

        <li>
            <button >
                Projects
            </button>
        </li>
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

        <li class="crumb"><button >
            {#each Object.keys(flavors) as f}
                <span
                        class="chip mr-2 {flavors[f] ? 'variant-filled' : 'variant-soft'}"
                        on:click={() => { flavors[f] = !flavors[f];}}
                        on:keypress
                >
                    {#if flavors[f]}<span><Check size={10} class="scale-[120%]"/></span>{/if}
                    <span class="capitalize">{f}</span>
                </span>
            {/each}
        </button></li>

<!--        <button type="button" class="btn-icon variant-ghost-primary absolute right-7 !rounded-b scale-[80%] ">-->
<!--            <Plus class="scale-95"/>-->
<!--        </button>-->
    </ol>
</div>

