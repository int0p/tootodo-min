<script lang="ts">
    import { ConicGradient } from '@skeletonlabs/skeleton';
    import type { ConicStop } from '@skeletonlabs/skeleton';
    const conicStops: ConicStop[] = [
        { color: 'rgb(227,11,56)', start: 0, end: 80 },
        { color: 'rgba(246,237,240,0.8)', start: 80, end: 100 },
    ];
    export let classHour;
    export let widthHour;
</script>
<ConicGradient stops={conicStops} width={widthHour}
    class={classHour}
/>
