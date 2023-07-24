<script>
    import {DragableBox, Editor, PomoTimer} from "$components";

</script>

<div class="flex w-full h-full relative">
    <slot />
<!--    <div class="flex-col w-1/3 h-full relative min-w-[330px] max-w-[380px]">-->
<!--        <slot/>-->
<!--    </div>-->

<!--    &lt;!&ndash;        editor&ndash;&gt;-->
<!--    <div class="w-3/4 ml-2 h-full">-->
<!--        <Editor/>-->
<!--    </div>-->

<!--    <div class="absolute right-0 timer ">-->
<!--&lt;!&ndash;        <PomoTimer/>&ndash;&gt;-->
<!--    </div>-->
</div>

<!--<style lang="scss">-->
<!--    .timer{-->
<!--          @include breakpoint.down('xl') {-->
<!--            visibility: hidden;-->
<!--          }-->
<!--    }-->
<!--    .editor{-->
<!--      @include breakpoint.up('xl') {-->
<!--        width: calc(100% - 770px);-->
<!--      }-->
<!--    }-->
<!--</style>-->


