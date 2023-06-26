<script>
import {Editor} from "$components";
</script>

<div class="flex w-full h-full">
    <div class="flex-col w-1/3 h-full relative min-w-[330px] max-w-[450px]">
        <slot/>
    </div>

    <!--        editor-->
    <div class="w-2/3 min-w-[calc(100%-450px)] h-full relative -top-9">
        <Editor/>
    </div>
</div>
