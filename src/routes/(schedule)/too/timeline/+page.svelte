<script lang="ts">
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import ProjectForm from "$lib/components/form/createProject.svelte";
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

    const modalComponent: ModalComponent = {
        ref: ProjectForm,
    };


    function modalCreateProject(){
        const modal: ModalSettings = {
            type: 'component',
            component: modalComponent,

            title: 'Create Project',
            body: '새로 추가할 프로젝트의 정보를 입력하세요',
            response: (r: string) => console.log('response:', r),
            // Pass the component directly:
        };
        modalStore.trigger(modal);
    }

    const dayInMs = 24 * 60 * 60 * 1000;

    function daysBetween(start, end) {
        return Math.round((end - start) / dayInMs);
    }

    let tasks = [
        { id: 1, name: "Task 1", start: new Date(2023, 0, 1), end: new Date(2023, 0, 5) },
        { id: 2, name: "Task 2", start: new Date(2023, 0, 3), end: new Date(2023, 0, 8) },
        { id: 3, name: "Task 3", start: new Date(2023, 0, 3), end: new Date(2023, 0, 8) },
        // ... other tasks
    ];

    let milestones = [
        { id: 1, name: "Milestone 1", start: new Date(2023, 0, 1), end: new Date(2023, 0, 8) },
        { id: 2, name: "Milestone 2", start: new Date(2023, 0, 3), end: new Date(2023, 0, 8) },
        // ... other tasks
    ];
</script>

<Modal/>

<table class="w-full bg-white h-[50px] rounded-t-xl border-b text-black">
    <thead class="">
    <tr class="sticky">
        <th rowspan="2" class="border-r w-[5%]"><button class="">v</button></th>
        <th rowspan="2" class="border-r w-[20%]">milestone</th>
        <th rowspan="2" class="border-r w-[7%]">status</th>
        <th rowspan="2" class="border-r w-[13%]">duration</th>
        <th class="border-b w-[55%]"><input type="date"/>            -            <input type="date"/></th>
    </tr>
    <tr class="">
        <td>            start        </td>
    </tr>
    </thead>
</table>

<div class="w-[calc(100%+8px)] h-[calc(100%-70px)] overflow-y-scroll flex-col space-y-2">
    {#each Array(3) as _,i}
    <div class="my-2 border-b-2">
        <header class="h-[40px] bg-white/40 dark:bg-white/20 flex items-center space-x-2 p-2">
            <button
                    class="chip variant-soft-primary w-8 h-6 "
                    on:click={ modalCreateProject}
            > <span class=" text-primary-700 scale-110">+</span>
            </button>
            <span class="font-bold text-xl ">Project {i}</span>
        </header>
        <table class="w-full bg-white text-black">
            <thead class="">
            <tr >
                <th class="w-[5%]"></th>
                <th class="w-[20%]"></th>
                <th class="w-[7%]"></th>
                <th class=" w-[13%]"></th>
                <th class="w-[55%]"></th>
            </tr>
            </thead>
            <tbody class="border-b-2">
            {#each milestones as milestone,i}
                <tr class="border-t-2">
                    <td class="border-r text-center">
                        <button
                                class="chip variant-soft-secondary w-7 h-6"
                                on:click={ modalCreateProject}
                        > <span class=" text-secondary-700">+</span>
                        </button>
                    </td>
                    <td class="border-r pl-2">milestone-name {i}</td>
                    <td class="border-r pl-2">state {i}</td>
                    <td class="border-r">
                        <span>{milestone.start.getMonth()+1}월 {milestone.start.getDate()}일</span>
                        <span>-</span>
                        <span>{milestone.end.getMonth()+1}월 {milestone.end.getDate()}일</span>
                    </td>
                    <td><div class="border-b">
                        <div id="milestone"
                             style="margin-left: {daysBetween(milestones[0].start, milestone.start) * 20}px;
                            width: {daysBetween(milestone.start, milestone.end) * 20}px;">
                            {milestone.name}
                        </div>
                    </div></td>
                </tr>

                {#each tasks as task (task.id)}
                    <tr>
                        <td class="border text-end p-2">
                            <button
                                    class="chip variant-soft-surface w-7 h-5"
                                    on:click={ modalCreateProject}
                            > <span class=" text-surface-700 ">+</span>
                            </button>
                        </td>
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
        color:white;
        background-color: #a193bb;
        line-height: 30px;
        text-align: center;
    }

    #milestone {
        height: 30px;
        margin: 5px 0;
        color:white;
        background-color: #4f485c ;
        line-height: 30px;
        text-align: center;
    }
</style>