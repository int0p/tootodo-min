<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    import {getContext} from "svelte";
    import {settings} from "$stores/useLocStorage.js";
    import {pomoKey} from "./key.js";
    $:pomoInfo = getContext(pomoKey);

    $:donePercent = ($pomoInfo.timeLeft/60%60)/60*100;
    // $:console.log(donePercent);
    $:conicStops= [
        { color: 'rgba(241,228,225,0.97)', start: 0, end: donePercent },
        { color: '#D92B3A', start: donePercent, end: 100 }, //pomodoro-500
    ];
    export let classHour;
    export let widthHour;
</script>
<ConicGradient stops={conicStops} width={widthHour}
    class={classHour}
/>
