<script lang="ts">
    import "$styles/spotify.scss";
    import type { LayoutData } from './$types';
    import {invalidateAll} from "$app/navigation";
    import {LogoutButton} from "$components";
    export let data: LayoutData;

    $: user = data.user;
</script>

{#if user}
    <div class="flex w-full flex-between">
        <p> Hello {user.display_name}</p>
        <LogoutButton />
    </div>
{/if}
<slot/>

