<script>
    ///////////////////// icon  ///////////////////////
    import {Repeat, SkipBack, Play, Pause, SkipForward, Volume2, VolumeX} from 'lucide-svelte'

</script>

<div class="flex justify-center text-primary-900 dark:text-primary-50 space-x-2 text-2xl relative py-2">
    <Repeat class="absolute left-2"/>
    <SkipBack />
    <Play />
    <!--        <Pause/>-->
    <SkipForward />
    <Volume2 class="absolute right-2"/>
<!--    <VolumeX />-->
</div>