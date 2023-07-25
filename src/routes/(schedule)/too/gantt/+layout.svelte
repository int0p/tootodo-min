<script>
import {goto} from "$app/navigation";
import {moveView, setView, showOptions} from "$stores/gantt.ts";
import {browser} from "$app/environment";
import { TabGroup,TabAnchor } from '@skeletonlabs/skeleton';

import './gantt-default.css';
import {page} from "$app/stores";


</script>


<header class="header h-[60px] flex justify-start items-center space-x-1
        bg-white/30 dark:bg-black/40 border-t-2  rounded-t-xl">

    <TabGroup class="text-black dark:text-white text-sm lg:text-lg lg:font-bold ">
        <TabAnchor on:click={() => goto('/too/gantt')} selected={$page.url.pathname === '/too/gantt'}>
            LargeDataset
        </TabAnchor>
        <TabAnchor on:click={() => goto('/too/gantt/dependencies')} selected={$page.url.pathname.includes('/too/gantt/dependencies')}>
            Dependencies
        </TabAnchor>
        <TabAnchor on:click={() => goto('/too/gantt/tree')} selected={$page.url.pathname.includes('/too/gantt/tree')}>
            Tree
        </TabAnchor>
        <TabAnchor on:click={() => goto('/too/gantt/events')} selected={$page.url.pathname.includes('/too/gantt/events')}>
            Events
        </TabAnchor>
    </TabGroup>

    <TabGroup
            active="variant-filled-primary"
            hover="hover:variant-soft-primary"
            flex="flex-1 lg:flex-none"
            rounded="rounded-2xl"
            border=""
            class=" absolute right-0 bg-surface-900-50-token text-white border-primary-300 border-b-2
                        dark:text-black  text-sm rounded-2xl scale-90 ">
        <input type="button" value="<" on:click={()=> {moveView.set('prevDay')}}/>
        <TabAnchor on:click={()=> {setView.set('day')}}>
            Day
        </TabAnchor>
        <input type="button" value=">" on:click={()=> {moveView.set('nextDay')}}/>

        <TabAnchor on:click={()=> {setView.set('week')}}>
            Week
        </TabAnchor>
        <button on:click={()=> {showOptions.set(!$showOptions)}}>|||</button>
    </TabGroup>

    <div class="header-title p-4">
        <a href="https://github.com/ANovokmet/svelte-gantt">G</a>
    </div>
</header>

<div class="w-full h-[calc(100%-60px)] bg-white/90 dark:bg-white">
    {#if browser}
        <slot/>
    {/if}
</div>

<style>
    button, input[type=button]{
        padding: 6px 14px;
        cursor: pointer;
        transition: background 0.2s;
        outline: none;
    }

    button:hover, input[type=button]:hover {
        background-color: #b14d51;
        color: #ffffff;
    }

    button:active, input[type=button]:active{
        background-color: #9d4548;
        color: #ffffff;
    }

</style>