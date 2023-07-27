<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    const conicStops: ConicStop[] = [
        { color: '#c82636', start: 0, end: 90 },
        { color: 'rgb(241,228,225)', start: 50, end: 100 },
    ];
    export let classGoal;
    export let widthGoal;
</script>
<ConicGradient stops={conicStops} width={widthGoal}
     class={classGoal}
/>
