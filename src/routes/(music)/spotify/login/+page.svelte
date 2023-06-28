<script>
    import {Button} from "$components";
</script>
<h1> Spotify </h1>
<Button element="a" variant="solid" href="./api/auth/login">Login</Button>


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