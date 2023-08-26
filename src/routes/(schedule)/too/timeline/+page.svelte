<script>
    const dayInMs = 24 * 60 * 60 * 1000;

    function daysBetween(start, end) {
        return Math.round((end - start) / dayInMs);
    }

    let tasks = [
        { id: 1, name: "Task 1", start: new Date(2023, 0, 1), end: new Date(2023, 0, 5) },
        { id: 2, name: "Task 2", start: new Date(2023, 0, 3), end: new Date(2023, 0, 8) },
        // ... other tasks
    ];

    let milestones = [
        { id: 1, name: "Milestone 1", start: new Date(2023, 0, 1), end: new Date(2023, 0, 8) },
        { id: 2, name: "Milestone 2", start: new Date(2023, 0, 3), end: new Date(2023, 0, 8) },
        // ... other tasks
    ];
</script>


<table class="w-full bg-white h-[50px] ">
    <thead class="border-2">
    <tr class="sticky">
        <th rowspan="2" class="border w-[4%]"><button class="">v</button></th>
        <th rowspan="2" class="border w-[20%]">milestone</th>
        <th rowspan="2" class="border w-[7%]">status</th>
        <th rowspan="2" class="border w-[13%]">duration</th>
        <th class="w-[56%]"><input type="date"/>
            -
            <input type="date"/></th>
    </tr>
    <tr class="border">
        <td>            start        </td>
    </tr>
    </thead>
</table>

<div class="w-[calc(100%+8px)] h-full max-h-[calc(100%-70px)] overflow-y-auto">
    {#each Array(3) as _,i}
    <div class="card border-t-2  rounded-t-xl my-2">
        <header class="header h-[40px] flex justify-start items-center space-x-1
            bg-white/30 dark:bg-black/40 relative">
            <span class="font-bold text-xl px-4">Project {i}</span>
            <button class="btn absolute right-0">
                add project
            </button>
        </header>
        <table class="w-full bg-white">
            <thead class="">
            <tr >
                <th class="w-[4%]"></th>
                <th class="w-[20%]"></th>
                <th class="w-[7%]"></th>
                <th class=" w-[13%]"></th>
                <th class="w-[56%]"></th>
            </tr>
            </thead>
            <tbody class="border-2">
            {#each milestones as milestone,i}
                <tr class="border-2">
                    <td class="border text-center">v</td>
                    <td class="border pl-2">milestone-name {i}</td>
                    <td class="border pl-2">state {i}</td>
                    <td class="border">
                        <span>{milestone.start.getMonth()+1}월 {milestone.start.getDate()}일</span>
                        <span>-</span>
                        <span>{milestone.end.getMonth()+1}월 {milestone.end.getDate()}일</span>
                    </td>
                    <td><div class="">
                        <div id="milestone"
                             style="margin-left: {daysBetween(milestones[0].start, milestone.start) * 20}px;
                            width: {daysBetween(milestone.start, milestone.end) * 20}px;">
                            {milestone.name}
                        </div>
                    </div></td>
                </tr>

                {#each tasks as task (task.id)}
                    <tr>
                        <td class="border text-end p-2">+</td>
                        <td class="border pl-4">{task.name}</td>
                        <td class="border">{i}</td>
                        <td class="border">0825 - 9023</td>
                        <td><div class="">
                            <div id="task"
                                 style="margin-left: {daysBetween(tasks[0].start, task.start) * 20}px;
                            width: {daysBetween(task.start, task.end) * 20}px;">
                                {task.name}
                            </div>
                        </div></td>
                    </tr>
                {/each}
            {/each}
            </tbody>
        </table>
    </div>
    {/each}
</div>


<style>
    #task {
        height: 30px;
        margin: 5px 0;
        background-color: #4CAF50;
        line-height: 30px;
        text-align: center;
    }

    #milestone {
        height: 30px;
        margin: 5px 0;
        background-color: #6a806a;
        line-height: 30px;
        text-align: center;
    }
</style>