<script>
import {goto} from "$app/navigation";
import {moveView, setView, showOptions} from "$stores/gantt.ts";
</script>

<header class="header">
    <div class="header-title">
        <a href="https://github.com/ANovokmet/svelte-gantt">Svelte-gantt</a>
    </div>
    <div class="header-controls">
        <a on:click={() => goto('/too/gantt')}><button type="button">LargeDataset</button></a>
        <a on:click={() => goto('/too/gantt/dependencies')} ><button type="button">Dependencies</button></a>
        <a on:click={() => goto('/too/gantt/tree')} ><button type="button">Tree</button></a>
        <a on:click={() => goto('/too/gantt/external')} ><button type="button">External</button></a>
        <a on:click={() => goto('/too/gantt/events')} ><button type="button">Events</button></a>

        <input type="button" value="<" on:click={()=> {moveView.set('prevDay')}}/>
        <button type="button" value="Day view" on:click={()=> {setView.set('day')}}>Day view</button>
        <input type="button" value=">" on:click={()=> {moveView.set('nextDay')}}/>
        <button type="button" value="Week view" on:click={()=>{setView.set('week')}}>Week view</button>
        <button on:click={()=> {showOptions.set(!$showOptions)}}>|||</button>
    </div>
</header>

<div class="w-[calc(100%-0.1rem)] h-[calc(100%-165px)] overflow-y-scroll">
    <slot/>
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