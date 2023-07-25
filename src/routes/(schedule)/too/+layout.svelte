
<script lang="ts">
    import { TreeView, TreeViewItem, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import {ListTree, BarChartHorizontalBig,Presentation } from "lucide-svelte";
    import {BreadcrumbToo} from "$components";
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";
    let state = [0,1,0];
    let value = 0;

    $:{
        if(browser){
            if(value===0) goto('/too');
            if(value===1) goto('/too/gantt/tree');
            if(value===2) goto('/too/map');
        }
    }
</script>

<RadioGroup class="justify-end border-none top-14 right-2.5 z-10 fixed"
            background="none" display="flex" active="variant-filled-primary" hover="hover:variant-soft-primary">
    <RadioItem bind:group={value} name="justify" value={0}><Presentation class="scale-[90%]" /></RadioItem>
    <RadioItem bind:group={value} name="justify" value={1}><BarChartHorizontalBig class="scale-[90%]" /></RadioItem>
    <RadioItem bind:group={value} name="justify" value={2}><ListTree class="scale-[90%]" /></RadioItem>
</RadioGroup>

<div class="flex-col space-y-2 w-full h-full justify-center items-center ">

    <div class="h-10 w-full">
        <BreadcrumbToo/>
    </div>

    <div class="w-[calc(100%)] h-[calc(100%-85px)]">
        <slot/>
    </div>

</div>



