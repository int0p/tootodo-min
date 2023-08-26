<script>
    import {X, ChevronDown,ChevronUp} from "lucide-svelte";

    let currentVariant = '!bg-transparent';
    let todoSelected = false;
    let todo = "hello  world";
    let showTodo = false;
</script>

<!--no dependency-->

<!---->
<div class="w-full h-full max-h-full max-w-full overflow-x-scroll overflow-y-clip hide-scrollbar text-token flex gap-4 p-0.5 pr-2 py-1">
    {#each Array(6) as _, i}
        <div class="card w-1/3  min-w-[300px] card-hover border-black dark:border-white border space-y-2 bg-white/40 dark:bg-black/30" >
            <header class="relative overflow-hidden text-black border-b border-black border-dashed dark:border-white
                                    {showTodo ? "h-[54px]" :"h-[128px]"}">
                                    <img src={"/city.png"} class="w-full absolute  aspect-[21/9] -z-10 dark:z-0 dark:opacity-70"/>
                <button class="btn absolute top-2 right-1 bg-surface-50 w-[30px] h-[24px] opacity-60  " on:click={()=>showTodo = !showTodo}>
                    {#if showTodo}
                        <span><ChevronDown color="#775f5f" /></span>
                    {:else}
                        <span><ChevronUp color="#775f5f" /></span>
                    {/if}
                </button>
                <div class="px-4 py-1.5 absolute h-full w-5/6 bg-white/80 dark:bg-black/70 dark:text-white   flex-col space-y-0">
                        <div class="flex justify-between">
                            <h6 class="text-sm">project </h6>
                            <h3 class="text-xl" >Milestone {i+1}</h3>
                        </div>
                        <p class="line-clamp-3 w-full break-all leading-5 font-light ">
                            description of the project description of the project description of the project description of the project
                        </p>
                    </div>
            </header>

<!--            heatmap-->
            {#if !showTodo}
                <div class="flex w-[280px] h-[140px] m-auto">
                    <div class="day h-full mr-1 text-xs text-center">
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                    </div>
                    <table class="grass-table w-full h-full">
                        <tbody>
                        {#each Array(7) as _, i}
                            <tr>
                                <!-- 주당 7일 반복 -->
                                {#each Array(2) as _,j}
                                    <td data-commit="0"></td>
                                    <td data-commit="1"></td>
                                    <td data-commit="2"></td>
                                    <td data-commit="3"></td>
                                    <td data-commit="4"></td>
                                    <td data-commit="2"></td>
                                    <td data-commit="1"></td>
                                {/each}
                            </tr>
                        {/each}

                        <tr class="text-xs text-center bg-transparent">
                            {#each Array(14) as _, i}
                                <td class="!border-0">{i+1}</td>
                            {/each}
                        </tr>

                        </tbody>
                    </table>
                </div>
            {/if}

            <footer class="px-3 py-1 flex justify-between items-center">
                <small class="text-primary-600-300-token ">FROM </small>
                <small class="">{new Date().toLocaleDateString()}</small>
                <small class="font-semibold"> -- </small>
                <small class="">{new Date().toLocaleDateString()}</small>
                <small class="text-primary-600-300-token">TO </small>
            </footer>
            <hr class="opacity-50" />

            {#if !showTodo}
                <div class="px-2">
                    memo
                </div>
            {/if}

<!--            todolist-->
            {#if showTodo}
            <div class="max-h-[calc(100%-120px)] flex-col justify-center items-center overflow-y-scroll">
                <div class="w-ful h-full">
                    {#each Array(13) as _, i}
                        <div class="!py-2.5 flex relative w-full hover:bg-primary-300/30 "
                             on:click={() => todoSelected = !todoSelected} on:keypress >
                            <button class="chip btn_select_date z-10">07.27</button>
                            <input checked={todoSelected}
                                   type="checkbox" class=" relative left-[4.5rem] top-0.5 z-10 w-[1.4rem] h-5
                                        dark:bg-surface-50
                                        checked:bg-secondary-700/50 dark:checked:bg-secondary-800/80
                                        border-0 border-l-4 border-double !border-tertiary-500 shadow"/>
                            <div class=" w-[calc(100%-140px)] h-full text-start relative left-20" on:click={todoSelected = !todoSelected}> {todo} </div>
                            <button class="btn_delete z-20"><X size={16} /></button>
                        </div>
                    {/each}
                </div>
            </div>
            {/if}

        </div>
    {/each}
</div>

<style lang="scss">
  .btn_delete{
    @apply px-1 py-1 absolute right-3  bg-tertiary-300/20 rounded-md aspect-square dark:bg-tertiary-400/40;
    &:hover{
      @apply bg-tertiary-400 text-white dark:bg-tertiary-400;
    }
  }
  .btn_select_date{
    @apply px-2 py-1 absolute left-3  bg-surface-500/20 w-[50px] dark:bg-surface-500/40;
    &:hover{
      @apply bg-surface-800 text-white dark:bg-surface-400 dark:text-black;
    }
  }

  .day div {
    height: calc(120px / 7);             /* 각 셀의 세로 길이 */
  }


  .grass-table td {
    width: calc(120px / 7);   /* 각 셀의 가로 길이 (300을 13으로 나눈 값) */
    height: calc(120px / 7);             /* 각 셀의 세로 길이 */
    border: 1px solid #f1eff5;  /* 경계선 색상 */
  }
  .grass-table td[data-commit="0"] { background-color: #d9d4e4 ; }//300
  .grass-table td[data-commit="1"] { background-color: #bdb3cf; } //400
  .grass-table td[data-commit="2"] { background-color: #a193bb ; } //500
  .grass-table td[data-commit="3"] { background-color: #796e8c; } //700
  .grass-table td[data-commit="4"] { background-color: #4f485c; } //900

  .primary{
    .grass-table td {
      width: calc(120px / 7);   /* 각 셀의 가로 길이 (300을 13으로 나눈 값) */
      height: calc(120px / 7);             /* 각 셀의 세로 길이 */
      border: 1px solid #e1e8ea;  /* 경계선 색상,50 */
    }
    /* 커밋 수에 따른 배경색 변경 */
    .grass-table td[data-commit="0"] { background-color: #d6e0e2; } //100
    .grass-table td[data-commit="1"] { background-color: #aec1c6; } //300
    .grass-table td[data-commit="2"] { background-color: #71929b; } //400
    .grass-table td[data-commit="3"] { background-color: #2f5965 ; }//600
    .grass-table td[data-commit="4"] { background-color: #1f3b43; } //800
  }

  .primary-dark{
    .grass-table td {
      width: calc(120px / 7);   /* 각 셀의 가로 길이 (300을 13으로 나눈 값) */
      height: calc(120px / 7);             /* 각 셀의 세로 길이 */
      border: 1px solid #fefaea;  /* 경계선 색상 */
    }
    .grass-table td[data-commit="0"] { background-color: #fdf8e3; } //100
    .grass-table td[data-commit="1"] { background-color: #fcf1c7; } //300
    .grass-table td[data-commit="2"] { background-color: #f7db73; } //500
    .grass-table td[data-commit="3"] { background-color: #dec568 ; }//600
    .grass-table td[data-commit="4"] { background-color: #796b38; } //900
  }

</style>