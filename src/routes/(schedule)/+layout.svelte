<script>
    import {DragableBox, Editor, PomoTimer} from "$components";

</script>

<div class="flex w-full h-full relative">
    <div class="flex-col w-1/3 h-full relative min-w-[330px] max-w-[450px]">
        <slot/>
    </div>

    <!--        editor-->
    <div class="w-2/3 min-w-[calc(100%-770px)] h-full relative -top-9 editor">
        <Editor/>
    </div>

    <div class="absolute right-0 timer ">
        <PomoTimer/>
    </div>
</div>

<style lang="scss">
    .timer{
          @include breakpoint.down('xl') {
            visibility: hidden;
          }
    }
    .editor{
      @include breakpoint.up('xl') {
        width: calc(100% - 770px);
      }
    }
</style>
