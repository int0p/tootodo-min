<script>
	import { Plus, Share } from 'lucide-svelte';
	import { TenMtable, WorkList } from '$components';
	import Shell from '../../ContentShell.svelte';
</script>

<div
	class="w-full h-full mt-1 max-h-[calc(100%-80px)] overflow-y-scroll hide-scrollbar
        border-b !border-primary-600-300-token"
>
	<TenMtable />
</div>

<!-- <Shell>
    <svelte:fragment slot="workList">
        <WorkList />
    </svelte:fragment>

    <svelte:fragment slot="setting">
        <div class="flex-col">
            <button class="scale-95"><Plus /></button>

            <button class="scale-95"><Share /></button>

        </div>
    </svelte:fragment>

    <svelte:fragment slot="contents">
        <TenMtable />
    </svelte:fragment>
</Shell> -->
