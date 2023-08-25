<script lang="ts">
    // Props
    /** Exposes parent props to this component. */
    export let parent: any;

    // Stores
    import { modalStore } from '@skeletonlabs/skeleton';

    // Form Data
    const formData = {
        title:"",
        color:"",
        description:"",
        duration_start:"",
        duration_end:"",
    };

    // We've created a custom submit function to pass the response and close the modal.
    function onFormSubmit(): void {
        if ($modalStore[0].response) $modalStore[0].response(formData);
        modalStore.close();
    }
    // Base Classes
    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
    const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
    const cTitle = 'text-lg font-bold';
</script>

<!-- @component This example creates a simple form modal. -->
{#if $modalStore[0]}
    <div class="modal-example-form {cBase}">
        <header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
        <article>{$modalStore[0].body ?? '(body missing)'}</article>
        <!-- Enable for debugging: -->
        <form class="modal-form {cForm}">
            <label class="label">
                <span class={cTitle}>Project Title</span>
                <input class="input" type="text" bind:value={formData.title} placeholder="Enter Project Title..." />
            </label>
            <label class="label">
                <span class={cTitle}>Project Color</span>
                <input class="input !h-[24px] relative top-1.5 left-1.5" type="color" bind:value={formData.color} />
            </label>
            <label class="label">
                <span class={cTitle}>Description</span>
                <input class="input" type="email" bind:value={formData.description} placeholder="Enter Project Info..." />
            </label>
            <label class="label">
                <span class={cTitle}>Duration</span>
                <div class="flex space-x-3">
                    <div class="w-1/2">
                        <span class="font-semibold">from</span>
                        <input class="input" type="date" bind:value={formData.duration_start} />
                    </div>
                    <div class = "w-1/2">
                        <span class="font-semibold">to</span>
                        <input class="input" type="date" bind:value={formData.duration_end} />
                    </div>
                </div>
            </label>
        </form>
    <!--     prettier-ignore -->
        <footer class="modal-footer {parent.regionFooter}">
            <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
        </footer>
    </div>
{/if}