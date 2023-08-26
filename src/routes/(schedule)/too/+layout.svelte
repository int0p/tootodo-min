
<script lang="ts">
    import { TreeView, TreeViewItem, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import {Map, BarChartHorizontalBig,Presentation, Library,Plus,Castle } from "lucide-svelte";
    import {BreadcrumbToo} from "$components";
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";
    let state = [0,1,0];
    let value = 2;


    $:{
        if(browser){
            if(value===0) goto('/too/timeline');
            if(value===1) goto('/too/gantt/tree');
            if(value===2) goto('/too/workingBoard');
        }
    }
</script>



<div class="flex-col space-y-2 w-full h-full justify-center items-center ">

    <div class="h-10 w-full">
        <BreadcrumbToo/>
    </div>
    <div class="w-full h-[calc(100%-108px)]">
        <slot/>
    </div>
    <div class="w-full">
        <RadioGroup class="w-full relative border-none py-2.5  bg-white/80 dark:bg-black/50 "
                    background="none" display="flex items-center justify-end" active="variant-filled-primary" hover="hover:variant-soft-primary">
            <div class="w-[184px] flex space-x-2 absolute left-3">
                <RadioItem bind:group={value} name="justify" value={0}><Map class="scale-[90%] rotate-90" /></RadioItem>
                <RadioItem bind:group={value} name="justify" value={2}><Map class="scale-[90%]" /></RadioItem>
                <RadioItem bind:group={value} name="justify" value={1}><Castle  class="scale-[90%]" /></RadioItem>
            </div>
            <div class="w-[calc(100%-200px)] h-[32px] flex !rounded-2xl rounded-l ">
                <input type="text" class="w-full !rounded-xl shadow z-10 transform -translate-y-0.5" placeholder="add todo"/>
                <RadioItem name="justify"  class="transform -translate-x-2"><Plus  class="scale-[90%]" /></RadioItem>
            </div>
        </RadioGroup>
    </div>


</div>



