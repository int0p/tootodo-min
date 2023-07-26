<script>
    import { createEventDispatcher } from "svelte";
    import { X } from "lucide-svelte";
const dispatch = createEventDispatcher();
export let input = void 0;
export let options = [];
export let limit = void 0;
export let allowlist = [];
export let denylist = [];
export let emptyState = "No Results Found.";
export let regionNav = "";
export let regionList = "list-nav";
export let regionItem = "";
export let regionButton = "w-full";
export let regionEmpty = "text-center";
export let whitelist = [];
export let blacklist = [];
export let duration = 200;
const deprecated = [whitelist, blacklist, duration];
$:
    listedOptions = options;
function filterByAllowDeny() {
    let _options = [...options];
    if (allowlist.length) {
        _options = _options.filter((option) => allowlist.includes(option.value));
    }
    if (denylist.length) {
        _options = _options.filter((option) => !denylist.includes(option.value));
    }
    if (!allowlist.length && !denylist.length) {
        _options = options;
    }
    listedOptions = _options;
}
function filterOptions() {
    let _options = [...listedOptions];
    _options = _options.filter((option) => {
        const inputFormatted = String(input).toLowerCase().trim();
        let optionFormatted = JSON.stringify([option.label, option.value, option.keywords]).toLowerCase();
        if (optionFormatted.includes(inputFormatted))
            return option;
    });
    return _options;
}
function onSelection(option) {
    dispatch("selection", option);
}
$:
    if (allowlist.length || denylist.length)
        filterByAllowDeny();
$:
    optionsFiltered = input ? filterOptions() : listedOptions;
$:
    sliceLimit = limit !== void 0 ? limit : optionsFiltered.length;
$:
    classesBase = `${$$props.class ?? ""}`;
$:
    classesNav = `${regionNav}`;
$:
    classesList = `${regionList}`;
$:
    classesItem = `${regionItem}`;
$:
    classesButton = `${regionButton}`;
$:
    classesEmpty = `${regionEmpty}`;
</script>

<!-- animate:flip={{ duration }} transition:slide|local={{ duration }} -->
<div class="autocomplete {classesBase}" data-testid="autocomplete">
    {#if optionsFiltered.length > 0}
        <nav class="autocomplete-nav {classesNav}">
            <ul class="autocomplete-list {classesList}">
                {#each optionsFiltered.slice(0, sliceLimit) as option (option)}
                    <li class="autocomplete-item relative {classesItem}">
                        <button class="autocomplete-button {classesButton} !py-2.5" type="button"
                                on:click={() => onSelection(option)} on:click on:keypress >
                            <button class="chip btn_select_date z-10">07.27</button>
                            <input checked={option.selected}
                                    type="checkbox" class=" relative left-10 z-10
                                        checked:bg-surface-800 dark:checked:bg-surface-600/80
                                        border-0 border-l-2 border-double border-tertiary-400-500-token shadow"/>
                            <div class=" w-[calc(100%-70px)] h-full text-start relative left-9" on:click={() => option.selected = !option.selected }> {@html option.label} </div>
                            <button class="btn_delete z-20"><X size={16} /></button>
                        </button>
                    </li>
                {/each}
            </ul>
        </nav>
    {:else}
        <div class="autocomplete-empty {classesEmpty}">{emptyState}</div>
    {/if}
</div>

<style lang="scss">
    .btn_delete{
      @apply px-1 py-1 absolute right-3  bg-tertiary-300/20 rounded-md aspect-square dark:bg-tertiary-500/50;
      &:hover{
        @apply bg-tertiary-400 text-white dark:bg-tertiary-500/90;
      }
    }
    .btn_select_date{
      @apply px-2 py-1 absolute left-3  bg-surface-500/20 w-[50px] dark:bg-surface-500/40;
      &:hover{
        @apply bg-surface-800 text-white dark:bg-surface-400 dark:text-black;
      }
    }
</style>