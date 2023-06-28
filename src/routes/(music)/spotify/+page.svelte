<script lang="ts">
    import type { LayoutData } from './$types';
    import {LogoutButton} from "$components";
    export let data: LayoutData;

    $: user = data.user;
</script>
<h1>Welcome to Spotify</h1>
<div class="flex">
    <p> Hello {user.display_name}</p>
    <LogoutButton/>
</div>


<style lang="scss">
  h1 {
    color: red;
    font-size: functions.toRem(36);
    @include breakpoint.up('md') {
      color: green;
    }
    @include breakpoint.up('lg') {
      color: blue;
    }
  }
</style>