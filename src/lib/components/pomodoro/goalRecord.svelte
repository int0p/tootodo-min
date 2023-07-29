<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    import {getContext} from "svelte";
    import {settings} from "$stores/useLocStorage.js";
    import {pomoKey} from "./pomodoro.js";
    $:pomoInfo = getContext(pomoKey);

    $:donePercent = 100-($pomoInfo.timeLeft/($settings.working*60))*100;

    $:conicStops = [
        { color: '#c32734', start: 0, end: donePercent }, //pomodoro-600
        { color: 'rgb(241,228,225)', start: donePercent, end: 100 },
    ];
    // $:console.log(donePercent);

    export let classGoal;
    export let widthGoal;
</script>
<ConicGradient stops={conicStops} width={widthGoal}
     class={classGoal}
/>
