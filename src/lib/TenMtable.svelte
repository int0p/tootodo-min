<script lang="ts">
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';

    const startTime = 10;
    let dayMinutes = ["","PLAN","10","20","30","40","50","60"];
    let dayHours = Array.from({length: 24}, (_, i) =>(i+startTime-1)%12+1); //0시때문에 +1함

    let table = Array.from(Array(dayMinutes.length), () => Array(dayHours.length).fill(false));
    //
    // const sourceData =
    // [
    //     { hour: '9', one: true, two:true,three:true, four:true,five:true,six:true },
    // ];
    //
    // const tableSimple: TableSource = {
    //     // A list of heading labels.
    //     head: dayMinutes,
    //     // The data visibly shown in your table body UI.
    //     body: tableMapperValues(sourceData, ['hour', 'one','two','three','four','five','six']),
    //     // Optional: The data returned when interactive is enabled and a row is clicked.
    //     meta: tableMapperValues(sourceData, ['hour', 'one','two','three','four','five','six']),
    //     // Optional: A list of footer labels.
    //     // foot: ['','','','','','Total', '<code class="code">5H 30M</code>'],
    // };
    //
    // function mySelectionHandler(){
    //     //해당시간에 editor에 작성한 내용 알려줌.
    // }
</script>

<!-- result table-->
<div class="text-center text-sm
         w-full h-full max-h-[calc(100%-160px)]
         overflow-y-scroll hide-scrollbar"
>
    <table class="w-full border-collapse">
        <tr class="sticky top-0">
            <th class="p-2 bg-primary-100 border border-primary-100"></th>
            {#each dayMinutes as min}
                <td class="text-xs sticky text-center py-1 px-1
                            border border-primary-100
                            bg-primary-600
                            text-primary-50 font-bold">
                    <span class="font-digital">{min}</span>
                </td>
            {/each}
        </tr>

        {#each dayHours as hour}
            <tr>
<!--                row header -> 몇시-->
                <th rowspan="2" class="text-xs py-0 px-0.5 border bg-primary-700 text-white font-bold">
                    <span class="font-digital text-primary-50">{hour}</span>
                </th>
<!--                30분 단위로 계획 세움-->
                <td class="py-0 border-b border-primary-600 dark:border-primary-50 border-dotted font-digital">0</td>
                <td class="py-0 border border-primary-600 dark:border-primary-100"></td>
<!--                work결과 10분단위로 보여줌-->
                {#each Array(6) as _,i}
                    <td rowspan="2" class="py-0 border border-primary-600 dark:border-primary-100"></td>
                {/each}
            </tr>
<!--            rowspan 간격 맞추기 위함.-->
            <tr>
                <td class="py-0 border-b border-primary-600 dark:border-primary-100 font-digital">30</td>
                <td class="py-0 border border-primary-600 dark:border-primary-100"></td>
            </tr>
        {/each}
    </table>
</div>

<!-- plan table-->
<!--<div class="text-center text-sm absolute top-0 left-6-->
<!--         w-[27%] h-full max-h-[calc(100%-160px)]-->
<!--         overflow-y-scroll hide-scrollbar"-->
<!--&gt;-->
<!--    <table class="w-full border-collapse">-->
<!--        <tr class="sticky top-0">-->
<!--            <th class="p-2 bg-primary-100"></th>-->
<!--                <td class="text-xs sticky text-center py-1 px-1-->
<!--                                border bg-primary-700-->
<!--                                text-white font-bold">-->
<!--                    <span class="font-digital">{dayMinutes[0]}</span>-->
<!--                </td>-->
<!--        </tr>-->

<!--        {#each plan as min}-->
<!--            <tr class="">-->
<!--                <th class="text-xs py-0 border bg-primary-700 text-white font-bold">-->
<!--                    <span class="font-digital ">{min}</span>-->
<!--                </th>-->
<!--                <td class="py-2 border border-primary-500"></td>-->
<!--            </tr>-->
<!--        {/each}-->
<!--    </table>-->
<!--</div>-->

<!-- by using skeleton component-->
<!--<div class="flex-col w-full h-full">-->
    <!--    <Table source={tableSimple} interactive={true} on:selected={mySelectionHandler}-->
    <!--           class="text-center text-sm-->
    <!--           absolute top-10-->
    <!--           w-full h-full max-h-[calc(100%-230px)]-->
    <!--           overflow-y-scroll hide-scrollbar"-->
    <!--    />-->
<!--</div>-->

