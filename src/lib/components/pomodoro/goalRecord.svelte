<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    const conicStops: ConicStop[] = [
        { color: 'rgb(188,24,55)', start: 0, end: 80 },
        { color: '#f7f4f5', start: 80, end: 100 },
    ];
    export let classGoal;
    export let widthGoal;
</script>
<ConicGradient stops={conicStops} width={widthGoal}
     class={classGoal}
/>
