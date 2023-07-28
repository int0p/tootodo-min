<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    const conicStops: ConicStop[] = [
        { color: 'rgba(241,228,225,0.97)', start: 0, end: 30 },
        { color: '#D92B3A', start: 30, end: 100 }, //pomodoro-500
    ];
    export let classHour;
    export let widthHour;
</script>
<ConicGradient stops={conicStops} width={widthHour}
    class={classHour}
/>
