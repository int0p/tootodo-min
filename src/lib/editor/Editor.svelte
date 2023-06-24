<script>
import BreadCrumb from "./breadcrumb.svelte"
</script>

<div class="flex-col w-full h-full relative">
    <!--		breadcrumb-->
    <BreadCrumb/>
    <!--        editor-->
    <textarea class="w-[calc(100%-1rem)] h-[calc(100%-2rem)] bg-white/40
    ml-5 mt-2 relative
    border-0  rounded-xl shadow-lg shadow-primary-300/40
    dark:text-white
"></textarea>
</div>
