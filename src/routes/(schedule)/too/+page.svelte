<script lang="ts">
    import Shell from '../ContentShell.svelte';
    import WorkList from "$lib/WorkList.svelte";
    import AddIcon from "~icons/eva/plus-fill"
    import CalendarIcon from "~icons/eva/calendar-fill"
    import DownloadIcon from "~icons/eva/downloadFill"

    import { Autocomplete, SlideToggle } from '@skeletonlabs/skeleton';
    import type { AutocompleteOption } from '@skeletonlabs/skeleton';
    import {currentTime} from "$lib/stores/time";

    const flavorOptions: AutocompleteOption[] = [
        { label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
        { label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
        { label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
        { label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
        { label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
        { label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
        { label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
        { label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
        { label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
        { label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
    ];
    import InputChip from "$lib/InputChip.svelte"
    let inputChip = '';
    let inputChipList: string[] = ['vanilla', 'chocolate'];
    function onInputChipSelect(event: any): void {
        // todo: editor에 선택한 todo내용이 보이도록함.
        inputChipList.push(event.detail.label);
        inputChipList = inputChipList;
    }
    let modeShowTodo=true;
</script>

<Shell>
    <svelte:fragment slot="area">
        <button class="chip variant-soft-success w-1/3 uppercase flex-col justify-center items-center" >
            Done
            <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date-1}</span>
        </button>

        <button class="chip variant-soft-secondary w-1/3 uppercase flex-col justify-center items-center border-double border-4 border-primary-500 py-0 text-black" >
            In progress
            <span class="variant-filled border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date}</span>
        </button>

        <button class="chip variant-soft-surface w-1/3 uppercase flex-col justify-center items-center" >
            Not started
            <span class="bg-white/50 text-black border-primary-400 text-xs w-full rounded-md border-t-2">{$currentTime.date+1}</span>
        </button>
    </svelte:fragment>

    <svelte:fragment slot="workList">
        <WorkList/>
    </svelte:fragment>

    <svelte:fragment slot="setting">
        <button class="flex space-x-2 absolute top-1.5 right-0 scale-[115%]"><AddIcon/><DownloadIcon/></button>
        <div class="flex space-x-2 absolute top-8 right-0  text-lg">
            <div class="text-sm font-digital relative left-3 w-[84px] ">
                <span class="text-error-500 dark:text-error-400">todo mode:</span>
                {#if modeShowTodo}
                     show detail
                {:else}
                     add at editor
                {/if}
            </div>
            <SlideToggle name="slider-label" bind:checked={modeShowTodo} label="mode" size="sm"
                         class="scale-75 relative -bottom-1.5 -right-1"/>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="contents">
        <div class="card w-full h-full p-2 bg-white/40 " tabindex="-1">
            {#if modeShowTodo}
                <Autocomplete bind:input={inputChip} denylist={inputChipList} options={flavorOptions} on:selection={onInputChipSelect}
                              class="h-full max-h-[calc(100%-40px)] overflow-y-auto"  />
                <input bind:value={inputChip} placeholder="Search..."
                       class="input autocomplete absolute right-0 bottom-0 w-full rounded-lg variant-glass-primary " type="search" name="todomode"
                />
            {:else}
                <Autocomplete bind:input={inputChip} denylist={inputChipList} options={flavorOptions} on:selection={onInputChipSelect}
                              class="h-full max-h-[calc(100%-160px)] overflow-y-auto" />
                <InputChip bind:input={inputChip} bind:value={inputChipList} name="addmode"
                           class="absolute right-0 bottom-0 variant-glass-error"
                />
            {/if}
        </div>
    </svelte:fragment>
</Shell>

