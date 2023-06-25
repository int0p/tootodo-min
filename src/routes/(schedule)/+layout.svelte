<script>
import {Editor} from "$lib/editor/index.ts";
</script>

<div class="flex w-full h-full">
    <div class="flex-col w-1/4 h-full relative min-w-[330px] max-w-[600px]">
        <slot/>
    </div>

    <!--        editor-->
    <div class="w-3/4 h-full relative -top-9">
        <Editor/>
    </div>
</div>
