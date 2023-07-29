<script lang="ts">
    import { AlarmClock,Maximize2,Play,Pause } from 'lucide-svelte';
    import {PomoPopup, PomoForm} from "$components";
    import {browser} from '$app/environment';
    import {settings} from "$stores/useLocStorage.js";
    import { tippy } from '$actions';
    import {getContext, onDestroy, setContext} from 'svelte';
    import {writable} from "svelte/store";
    import {pomoKey} from './pomodoro.js';
    import moment from "moment/moment";

    let pomoTime; //todo 디폴트: 초기 설정 working시간 -> 타이머 동작시 남은시간

    setContext(pomoKey, writable({
        isRunning:false,
        timerStatus:"IDLE",
        timerStatusBefore:"IDLE",
        cycle:{
            count:1,
            start:"--:--",
            end:"--:--",
        },
        timeLeft:0,
    }));
    $:pomoInfo= getContext(pomoKey);
    $:console.log($pomoInfo);


    $:{
        if(browser) {
            let workingTime = $settings.working;
            const hour = Math.floor(workingTime / 60);
            const minutes = workingTime % 60;
            pomoTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }else{
            pomoTime = "00:25";
        }
    }
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
        <span class="font-digital text-[1rem]">{pomoTime}</span>
    </div>

<!--    pomodoro-->
    <div id="pomodoro" class="hidden">
        {#if $pomoInfo.timerStatus === "IDLE"}
            {#if browser}
                <!--setting후 start버튼 눌러서 timerStatus를 WORKING으로 변뽀-->
                <PomoForm/>
            {/if}
        {:else}
            <PomoPopup/>
        {/if}
    </div>

<!--    start/pause button-->
    <button on:click={()=>{
        if($pomoInfo.timerStatus === "IDLE") {
            $pomoInfo.timerStatus = "WORKING";
            $pomoInfo.timerStatusBefore = "IDLE";
        }
        $pomoInfo.isRunning = !$pomoInfo.isRunning;
    }}
            class="chip variant-glass-tertiary  py-2 px-2
    dark:bg-tertiary-200 dark:text-black dark:opacity-70">
        {#if $pomoInfo.isRunning}
            <span><Pause size={16} class="fill-current" /></span>
        {:else}
            <span><Play size={16} class="fill-current" /></span>
        {/if}
    </button>
</div>

