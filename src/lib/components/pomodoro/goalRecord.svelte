<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    const conicStops: ConicStop[] = [
        { color: '#e11d48', start: 0, end: 10 },
        { color: '#f7f4f5', start: 60, end: 100 },
    ];
    export let classGoal;
    export let widthGoal;
</script>
<ConicGradient stops={conicStops} width={widthGoal}
     class={classGoal}
/>
