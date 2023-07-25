<script>
import {goto} from "$app/navigation";
import {moveView, setView, showOptions} from "$stores/gantt.ts";
import {browser} from "$app/environment";
import './gantt-default.css';
import {onMount} from "svelte";
import {SvelteGanttExternal} from "svelte-gantt";


</script>


<header class="header h-[70px] h-max-[70px]  hide-scrollbar">

    <div class="header-controls">
        <a on:click={() => goto('/too/gantt')}><button type="button">LargeDataset</button></a>
        <a on:click={() => goto('/too/gantt/dependencies')} ><button type="button">Dependencies</button></a>
        <a on:click={() => goto('/too/gantt/tree')} ><button type="button">Tree</button></a>
        <a on:click={() => goto('/too/gantt/events')} ><button type="button">Events</button></a>

        <input type="button" value="<" on:click={()=> {moveView.set('prevDay')}}/>
        <button type="button" value="Day view" on:click={()=> {setView.set('day')}}>Day</button>
        <input type="button" value=">" on:click={()=> {moveView.set('nextDay')}}/>
        <button type="button" value="Week view" on:click={()=>{setView.set('week')}}>Week</button>
        <button on:click={()=> {showOptions.set(!$showOptions)}}>|||</button>
    </div>
    <div class="header-title">
        <a href="https://github.com/ANovokmet/svelte-gantt">G</a>
    </div>
</header>

<div class="w-[calc(100%-0.1rem)] h-[calc(100%-70px)] overflow-y-scroll">
    {#if browser}
        <slot/>
    {/if}
</div>

<style>

    button, input[type=button]{
        border: transparent;
        font-size: 14px;
        font-weight: 300;
        padding: 6px 12px;
        background: #cc595e;
        color: #ffffff;
        cursor: pointer;
        transition: background 0.2s;
        outline: none;
    }

    button:hover, input[type=button]:hover {
        background-color: #b14d51;
    }

    button:active, input[type=button]:active{
        background-color: #9d4548;
    }

    .header {
        display: flex;
        padding: 16px;
        background: #ee6e73;
    }

    @media only screen and (max-width: 900px) {
        .header {
            flex-direction: column;
        }

        .header-title {
            justify-content: center;
            margin-bottom: 6px;
        }

        .header-controls {
            justify-content: center;
        }
    }

    .header-title {
        display: flex;
        flex: 1;
        align-items: center;
        font-size: 36px;
        padding: 0 16px;
    }

    .header-title a {
        color: #ffffff;
        text-decoration: none;
    }

    .header-controls {
        display: flex;
        align-items: center;
    }

    .header button, .header input[type=button] {
        margin-right: 4px;
    }
</style>