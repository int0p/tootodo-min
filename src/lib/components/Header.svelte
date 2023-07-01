<script>
    import {LogoutButton, Navigation} from '$components';
    import { browser } from '$app/environment';
</script>

<div class="content">
    <div class="left">
        {#if browser}
            <Navigation desktop={false} />
        {/if}
    </div>
    <div class="right"><LogoutButton/>
    </div>
</div>

<style lang="scss">
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>