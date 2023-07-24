<script lang="ts">

    import { TreeView, TreeViewItem, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import {ListTree, BarChartHorizontalBig } from "lucide-svelte";
    import {BreadcrumbToo} from "$components";

    let state = [0,1,0];
    let value = 0;
</script>

<!--<div class="flex-col space-y-2 w-full h-full justify-center items-center">-->
<!--    <div class="h-10 w-full">-->
<!--        <BreadcrumbToo/>-->
<!--    </div>-->

<!--    <RadioGroup class="justify-end border-none" background="none" display="flex" active="variant-filled-primary" hover="hover:variant-soft-primary">-->
<!--        <RadioItem bind:group={value} name="justify" value={0}><BarChartHorizontalBig class="scale-[90%]" /></RadioItem>-->
<!--        <RadioItem bind:group={value} name="justify" value={1}><ListTree class="scale-[90%]" /></RadioItem>-->
<!--    </RadioGroup>-->
<!--    <slot/>-->
<!--</div>-->

<!--<SideShell>-->
<!--    <svelte:fragment slot="navi">-->
<!--        <div class="flex w-full justify-center space-x-2 font-bold uppercase mx-2">-->

<!--            <button class="state chip variant-soft-success"-->
<!--                    on:click={() => state = [1,0,0]}-->
<!--            >-->
<!--                FIN-->
<!--                <span class="taskNum" class:selectedState={state[0]}>{$currentTime.date-1}</span>-->
<!--            </button>-->

<!--            <button class="state chip variant-soft-secondary text-black"-->
<!--                    on:click={() => state = [0,1,0]}-->
<!--            >-->
<!--                ING-->
<!--                <span class="taskNum" class:selectedState={state[1]}>{$currentTime.date}</span>-->
<!--            </button>-->

<!--            <button class="state chip variant-soft-surface "-->
<!--                    on:click={() => state = [0,0,1]}-->
<!--            >-->
<!--                X-->
<!--                <span class="taskNum" class:selectedState={state[2]}>{$currentTime.date+1}</span>-->
<!--            </button>-->
<!--        </div>-->
<!--    </svelte:fragment>-->

<!--    <svelte:fragment slot="content">-->

<!--        <TreeView>-->
<!--            <TreeViewItem>-->
<!--                (item 1)-->
<!--                <svelte:fragment slot="children">-->
<!--                    <TreeViewItem>-->
<!--                        (Child 1)-->

<!--                        <svelte:fragment slot="children">-->
<!--                            <TreeViewItem>-->
<!--                                (Child of Child 1)-->
<!--                            </TreeViewItem>-->
<!--                            <TreeViewItem>-->
<!--                                (Child of Child 2)-->
<!--                            </TreeViewItem>-->
<!--                        </svelte:fragment>-->

<!--                    </TreeViewItem>-->

<!--                    <TreeViewItem>-->
<!--                        (Child 2)-->
<!--                    </TreeViewItem>-->

<!--                </svelte:fragment>-->
<!--            </TreeViewItem>-->

<!--            <TreeViewItem>-->
<!--                (item 2)-->
<!--            </TreeViewItem>-->
<!--        </TreeView>-->
<!--    </svelte:fragment>-->

<!--</SideShell>-->




<style>
    .state{
        @apply w-1/3 uppercase flex-col justify-center items-center shadow-inner py-1 ;
    }

    .taskNum{
        @apply w-full bg-white/50 text-black border-primary-400 text-xs  rounded-md border-t-2 dark:text-white;
    }

    .selectedState{
        @apply variant-filled border-primary-400 dark:bg-white dark:text-black;
    }
</style>