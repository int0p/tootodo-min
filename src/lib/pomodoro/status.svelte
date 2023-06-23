<script>
    export let state;
    export let timeLeft;
    function getFriendlyTime(minutesIN){
        const hours = (Math.floor(minutesIN / 3600)).toString().padStart(2, '0');
        const minutes = (Math.floor((minutesIN % 3600) / 60)).toString().padStart(2, '0');
        const seconds = (Math.floor(minutesIN % 60)).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }
    export let controlInTimer;
</script>

<button color="dark" class="w-full h-full flex-col py-1.5 px-2 divide-y-2 !bg-rose-950 !rounded-2xl border-white border-4 "
        on:click={controlInTimer}
>
    <div class="text-center w-full h-1/2 font-digital font-extrabold text-white">{getFriendlyTime(timeLeft)}</div>
    <div class="text-center w-full h-1/2   font-digital font-extrabold text-green-400 "> {state}</div>
</button>
