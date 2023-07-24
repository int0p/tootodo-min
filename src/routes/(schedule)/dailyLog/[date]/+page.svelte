<script>
    import {Plus, Share} from "lucide-svelte";
    import {TenMtable, WorkList} from "$components";
    import {currentTime} from "$stores/time.ts";
    import Shell from "../../ContentShell.svelte";
</script>

<Shell>
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
</Shell>