<script lang="ts">
    import type { LayoutData } from './$types';
    import type { PageData } from './$types';
    // export let data: LayoutData;
    export let data: PageData;
</script>

<h1>Welcome to Spotify</h1>
{data.user}

<style lang="scss">
  h1 {
    color: red;
    font-size: functions.toRem(36);
    @include breakpoint.up('md') {
      color: blue;
    }
    @include breakpoint.up('lg') {
      color: green;
    }
  }
</style>