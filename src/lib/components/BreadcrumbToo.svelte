<script lang="ts">
import {Blinds, LampDesk, Plus, Check} from "lucide-svelte";
import {page} from "$app/stores";
let flavors: Record<string, boolean> = {
    vanilla: true,
    chocolate: false,
    cake: false,
    milk: false,
    candy: false,
    strawberry: false,
    cookie: false,
    mint: false,
    caramel: false,
    coffee: false,
    peanut: false,
};
let showAllProjects = false;

import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

let selectedArea: string;

const popupFeatured: PopupSettings = {
    // Represents the type of event that opens/closed the popup
    event: 'click',
    // Matches the data-popup value on your popup element
    target: 'popupFeatured',
    // Defines which side of your trigger the popup will appear
    placement: 'bottom',
    closeQuery: '.listbox-item'
};

import { Maximize2, PenLine, Trash2,Cog} from 'lucide-svelte';

</script>


<!--sidebar toggle하는 녀석땜에 left-7 -->
<div class="w-full h-full relative left-7 top-1 flex">
    <!--    select Area-->
    <ol class="breadcrumb h-full w-[140px]">
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>
        <li>
            <button class="btn w-20 py-1" use:popup={popupFeatured}>
                <span class="capitalize ">{selectedArea ?? 'Area'}</span>
                <span>↓</span>
            </button>
        </li>

        <li class="crumb-separator" aria-hidden>&rsaquo;</li>

    </ol>
<!--    project list-->
    <button
            class="chip my-1 mr-2 font-bold w-[40px] {showAllProjects ? 'variant-filled-tertiary' : 'variant-soft-tertiary'}"
            on:click={() =>  {
                            showAllProjects = !showAllProjects;
                            Object.keys(flavors).forEach(f => flavors[f] = showAllProjects);
                        }}
    >ALL
    </button>

    <div class="w-[calc(100%-216px)] max-h-full max-w-[calc(100%-216px)] overflow-x-scroll overflow-y-clip hide-scrollbar whitespace-nowrap transform translate-y-1.5">
        {#each Object.keys(flavors) as f}
            <button
                    class="chip mr-2 font-semibold {flavors[f] ? 'variant-filled' : 'variant-soft'}"
                    on:click={() => {
                        if(flavors[f] === true) showAllProjects = false;
                        flavors[f] = !flavors[f];
                    }}
                    on:keypress
            >
                {#if flavors[f]}<span><Check size={10} class="scale-[120%]"/></span>{/if}
                <span class="capitalize">{f}</span>
<!--                <span-->
<!--                        class="chip mx-2 variant-glass-secondary"-->
<!--                        on:click={() => { }}-->
<!--                ><PenLine  size={10} class="scale-[120%]"/></span>-->
            </button>
        {/each}
    </div>
</div>

<!--Area popup combobox -> select area -->
<div class="card p-4 w-48 shadow-xl z-50 flex-col space-y-2" data-popup="popupFeatured">
    <div class="arrow bg-surface-100-800-token" />
    <button class="btn w-full absolute top-0 -right-16" on:click={() => { }}>
            <span
                    class="chip mr-2 variant-filled-tertiary"
            ><Cog size={10} class="scale-[130%]"/></span>
    </button>
    <ListBox rounded="rounded-none" class="max-h-[130px] overflow-y-scroll hide-scrollbar">
        <ListBoxItem bind:group={selectedArea} name="medium" value="books">Books</ListBoxItem>
        <ListBoxItem bind:group={selectedArea} name="medium" value="movies">Movies</ListBoxItem>
        <ListBoxItem bind:group={selectedArea} name="medium" value="television">TV</ListBoxItem>
        <ListBoxItem bind:group={selectedArea} name="medium" value="gpt">GPT</ListBoxItem>
    </ListBox>

    <div class="flex relative">
        <input type="text" placeholder="Add Area" class="w-full"/>
        <button class="btn absolute -right-8 -top-0.5" on:click={() => { }}>
            <span
                    class="chip mr-2 variant-filled-tertiary"
            ><Plus size={10} class="scale-[120%]"/></span>
        </button>
    </div>


</div>

