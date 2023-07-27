<script>
    export let state;
    export let timeLeft;
    function getFriendlyTime(minutesIN){
        const hours = (Math.floor(minutesIN / 3600)).toString().padStart(2, '0');
        const minutes = (Math.floor((minutesIN % 3600) / 60)).toString().padStart(2, '0');
        const seconds = (Math.floor(minutesIN % 60)).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }
    export let toggleTimer;
</script>

<button class="w-full h-full flex-col items-center justify-center py-1 m-auto divide-y-2 divide-white !bg-rose-950 !rounded-2xl border-white border-4 "
        on:click={toggleTimer}
>
    <div class="text-[19px] w-full h-1/2 font-digital font-bold text-white absolute left-0 top-2">{getFriendlyTime(timeLeft)}</div>
    <div class="text-[19px] w-full h-1/2   font-digital font-bold text-green-400 absolute left-0 bottom-0"> {state}</div>
</button>
