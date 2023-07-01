<script lang="ts">
    import type { LayoutData } from './$types';
    export let data: LayoutData;

    $: user = data.user;
</script>

<h1>Welcome to SvelteKit</h1>

<input />

<select>
    <option>Option</option>
</select>
<div style="height: 1000px" />

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