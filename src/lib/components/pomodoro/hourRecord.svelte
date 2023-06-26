<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    const conicStops: ConicStop[] = [
        { color: '#e11d48', start: 0, end: 15 },
        { color: '#f7f4f5', start: 80, end: 100 },
    ];
    export let classHour;
    export let widthHour;
</script>
<ConicGradient stops={conicStops} width={widthHour}
    class={classHour}
/>
