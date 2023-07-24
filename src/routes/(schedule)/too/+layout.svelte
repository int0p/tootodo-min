
<script lang="ts">
    import { TreeView, TreeViewItem, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import {ListTree, BarChartHorizontalBig } from "lucide-svelte";
    import {BreadcrumbToo} from "$components";
    import './gantt/gantt-default.css';
    import {showOptions, setView, moveView} from '$stores/gantt.ts';
    import {goto} from "$app/navigation";
    let state = [0,1,0];
    let value = 0;
    $:{
        if(value===0) goto('/too/gantt');
        if(value===1) goto('/too/map');
    }
</script>

<RadioGroup class="justify-end border-none absolute top-0 right-0 z-10"
            background="none" display="flex" active="variant-filled-primary" hover="hover:variant-soft-primary">
    <RadioItem bind:group={value} name="justify" value={0}><BarChartHorizontalBig class="scale-[90%]" /></RadioItem>
    <RadioItem bind:group={value} name="justify" value={1}><ListTree class="scale-[90%]" /></RadioItem>
</RadioGroup>

<div class="flex-col space-y-2 w-[calc(100%-0.1rem)] h-full justify-center items-center">
    <div class="h-10 w-full">
        <BreadcrumbToo/>
    </div>

    <slot/>

</div>


