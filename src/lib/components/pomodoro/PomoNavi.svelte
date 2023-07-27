<script lang="ts">
    import { AlarmClock,Maximize2,Play,Pause } from 'lucide-svelte';
    import {Pomodoro, PomoForm} from "$components";
    import {browser} from '$app/environment';
    import { tippy } from '$actions';
    let timerIDLE = true;
</script>

<div class="variant-soft-tertiary px-2 rounded-md dark:bg-zinc-700">
<!--    pomo popup button-->
    <div class="chip variant-filled-tertiary py-2 "
         use:tippy={{
                    content: document.getElementById('pomodoro') || undefined,
                    onMount:  () => {
                        const template = document.getElementById('pomodoro');
                        if (template) {
                            template.style.display = 'block';
                        }
                    },
                    trigger: 'click mouseenter',
                    placement: 'bottom',
                    interactive: true,
                    theme: 'pomodoro',
                    appendTo: document.body,
                    hideOnPopperBlur: false,
                    hideOnClick: 'toggle',
                    allowHTML: true,
                }}
    >
        <span><AlarmClock size={16} /></span>
        <span class="font-digital text-[1rem]">25:00</span>
    </div>

<!--    pomodoro-->
    <div id="pomodoro" class="hidden">
        {#if timerIDLE}
            {#if browser}
                <PomoForm bind:timerIDLE/>
            {/if}
        {:else}
            <Pomodoro/>
        {/if}
    </div>

    <button on:click={()=>timerIDLE = !timerIDLE}
            class="chip variant-glass-tertiary  py-2 px-2
    dark:bg-tertiary-200 dark:text-black dark:opacity-70">
        <span><Play size={16} class="fill-current" /></span>
    </button>
</div>

