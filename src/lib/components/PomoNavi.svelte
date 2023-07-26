<script lang="ts">
    import { AlarmClock,Maximize2,Play,Pause } from 'lucide-svelte';
    import {Pomodoro} from "$components";
    import { tippy } from '$actions';
</script>

<div class="variant-soft-tertiary px-2 rounded-md dark:bg-secondary-900/80">
    <div class="chip variant-filled-tertiary py-2 "
         use:tippy={{
					content: document.getElementById('pomodoro') || undefined,
					onMount: () => {
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
				}}
    >
        <span><AlarmClock size={16} /></span>
        <span class="font-digital text-[1rem]">25:00</span>
    </div>

    <div id="pomodoro" >
        <Pomodoro/>
    </div>

    <div class="chip variant-glass-tertiary  py-2 px-2
    dark:bg-tertiary-200 dark:text-black dark:opacity-70">
        <span><Play size={16} class="fill-current" /></span>
    </div>
</div>

