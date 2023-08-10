<script lang="ts">
    import { Autocomplete} from '@skeletonlabs/skeleton';
    import CustomAutoComplete from '$components/Autocomplete.svelte';
    import type { AutocompleteOption } from '@skeletonlabs/skeleton';

    const flavorOptions: AutocompleteOption[] = [
        { label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
        { label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
        { label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
        { label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } },
    ];
    import {InputChip} from "$components"
    let inputChip = '';
    let inputChipList: string[] = [];
    function onInputChipSelect(event: any): void {
        // todo: editor에 선택한 todo내용이 보이도록함.
        inputChipList.push(event.detail.label);
        inputChipList = inputChipList;
    }
    export let showWeekly=true;
    let selectedDate;
</script>

<div class="card w-full h-full p-2 bg-white/20 dark:bg-black/10" tabindex="-1">
    {#if showWeekly}
        <Autocomplete bind:input={inputChip} denylist={inputChipList} options={flavorOptions} on:selection={onInputChipSelect}
                      class="h-full max-h-[calc(100%-160px)] overflow-y-auto" />
        <InputChip bind:input={inputChip} bind:value={inputChipList} name="weekly"
                   class="absolute right-2 bottom-2 w-[calc(100%-1rem)] border-0
                           variant-glass-secondary border-1 border-double
                           shadow-md dark:shadow-primary-50/10 dark:shadow-sm"
        />
    {:else}
        <CustomAutoComplete bind:input={inputChip} denylist={inputChipList} options={flavorOptions}
                      class="h-full max-h-[calc(100%-40px)] overflow-y-auto"  />
        <input bind:value={inputChip} placeholder="Search..."
               class="input absolute right-2 bottom-2 w-[calc(100%-1rem)] rounded-lg border-0
                       variant-glass-primary border-1 border-double
                       shadow-md dark:shadow-primary-50/10 dark:shadow-sm"
               type="search" name="daily"
        />
    {/if}
</div>
