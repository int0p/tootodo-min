<script>
	import { Blinds } from 'lucide-svelte';
	import { PomoIcon } from '$components';
	import { minutesToCustomString, addTime } from '$helpers';
	import { TenMtable } from '$components';

	import { Editor } from '$components';
	import { BreadcrumbDo } from '$components';
	import { TableOfContents } from '@skeletonlabs/skeleton';
	import { selectedDate } from '$stores/useLocStorage.js';
	import moment from 'moment';
	import { afterUpdate, onMount } from 'svelte';
	export let showDailyLog = true;

	//tauri sqlite db
	import { getPomoRecords } from '$stores/useTauriStorage';
	let pomoRecords = [];

	afterUpdate(async () => {
		totalStudyTime = 0;
		studyTime = [];
		startTime = [];
		endTime = [];
		pomoRecords = await getPomoRecords($selectedDate);
	});

	//display pomodoro records
	let totalStudyTime = 0;
	let studyTime = [];
	let startTime = [];
	let endTime = [];
	$: {
		if (pomoRecords && Array.isArray(pomoRecords)) {
			//get total study time
			pomoRecords.forEach((pomoRecord) => {
				let total = 0;
				pomoRecord.cycles.forEach((cycle) => {
					total += cycle.studyTime;
				});
				studyTime.push(minutesToCustomString(total));
			});

			//get start time
			pomoRecords.forEach((pomoRecord) => {
				startTime.push(pomoRecord.cycles[0].start);
			});

			//get end time
			pomoRecords.forEach((pomoRecord) => {
				endTime.push(pomoRecord.cycles[pomoRecord.cycles.length - 1].end);
			});

			totalStudyTime = addTime(studyTime);
		}
	}

	//indexed db
	// import { liveQuery } from 'dexie';
	// import { db } from '$stores';
	// onMount(() => indexedDB.deleteDatabase('AppDatabase'));

	// $: pomoRecords = liveQuery(() => {
	// 	const collection = db.timers.where('date').equals($selectedDate).toArray();
	// 	return collection;
	// });
</script>

<div class="flex-col space-y-2 items-center justify-center w-full h-full relative">
	<div class="h-10 w-full">
		<BreadcrumbDo bind:showDailyLog />
	</div>

	<div class="flex w-full h-[calc(100%-50px)]">
		{#if showDailyLog}
			<!--            detail daily log-->
			<div class="flex-col relative w-full h-full mt-0.5">
				<div class="flex space-x-2 absolute right-0 top-1 text-lg z-10">
					<code class="relative bottom-1.5 code text-lg font-digital font-bold">
						{totalStudyTime}
					</code>
				</div>
				<div class="w-full h-full bg-white/40 dark:bg-black/30 relative border-0 rounded-xl">
					<!--                    today, date-->
					<div class="absolute left-3 top-3 text-lg font-semibold">
						{moment($selectedDate).format('MMMM Do YYYY')}
					</div>

					<!--                    record-->
					<div
						class="w-full h-[calc(100%-46px)] max-h-[calc(100%-46px)] overflow-y-clip
								absolute bottom-0 border-0 rounded-xl flex justify-center space-x-0
								text-surface-900-50-token bg-white/75 dark:bg-black/50"
					>
						<!--ten M planner-->
						<div
							class="w-full min-w-[340px] max-w-[340px] max-h-full overflow-y-auto hide-scrollbar relative"
						>
							<TenMtable />
						</div>

						<div
							class="flex flex-wrap justify-evenly my-4 space-y-4 items-center
									w-full max-h-full overflow-y-auto hide-scrollbar relative"
						>
							{#if pomoRecords}
								{#each pomoRecords as pomoRecord, id}
									<div
										class="card p-4 rounded-tr-none space-y-2
                                                    variant-ringed-surface
                                                    w-[280px] h-auto
                                "
									>
										<header class="flex space-x-4 items-center w-full">
											<!-- <big class="font-bold px-3 py-1.5 shadow-sm shadow-primary-600">{id + 1}</big> -->
											<div class="flex-col space-y-0.5 relative h-10 w-full">
												<big class="font-bold">
													<span class="text-primary-500">[ {id + 1} ]</span>
													{startTime[id]} - {endTime[id]}
												</big>
												<div class="flex space-x-2 absolute right-0">
													<small class="opacity-75 block">
														<span class="text-tertiary-500">Working:</span>
														{pomoRecord.working}min
													</small>
													<small class="opacity-75 block">
														<span class="text-secondary-600">Breaking:</span>
														{pomoRecord.breaking}min
													</small>
												</div>
											</div>
										</header>
										<table class="w-full text-center border">
											<thead>
												<tr class="border">
													<th class="!py-1.5 relative px-2">
														<span class="absolute left-1 top-1.5"><PomoIcon /></span>
													</th>
													<th class="!py-1.5">start</th>
													<th class="!py-1.5">end</th>
													<th class="!py-1.5">study time</th>
												</tr>
											</thead>
											<tbody>
												{#each pomoRecord.cycles as cycle, id}
													<tr class="">
														<td class="!py-2 !px-0 border-r">{id + 1}</td>
														<td class="!py-2 border-r">{cycle.start.split(' ')[0]} </td>
														<td class="!py-2 border-r">{cycle.end.split(' ')[0]}</td>
														<td class="!py-2">{minutesToCustomString(cycle.studyTime)}</td>
													</tr>
												{/each}
											</tbody>
											<tfoot>
												<tr class="border">
													<td
														colspan="3"
														class="!py-2 text-[rgb(var(--color-pomodoro-700))] dark:text-[rgb(var(--color-pomodoro-100))]"
													>
														Total Study Time.
													</td>
													<td>{studyTime[id]}</td>
												</tr>
											</tfoot>
										</table>
									</div>
								{/each}
							{/if}
						</div>
					</div>
				</div>
			</div>
		{:else}
			<!--            editor-->
			<div class="w-full h-full bg-white/40 dark:bg-black/30 relative border-0 rounded-xl mt-0.5">
				<div class="absolute left-3 top-3 text-lg font-semibold">tooltip</div>
				<textarea
					class="w-full h-[calc(100%-46px)] absolute bottom-0 rounded-xl
                    border-0 border-t border-primary-400-500-token
                    text-surface-900-50-token bg-white/75 dark:bg-black/50">Note</textarea
				>
			</div>

			<button
				type="button"
				class="btn-icon variant-ghost-primary absolute right-2 top-[3.57rem] scale-[85%] !rounded-b lg:top-[3.4rem] lg:scale-[98%]"
			>
				<Blinds strokeWidth="1.5" size={26} />
				<TableOfContents target="#toc-target" />
			</button>
		{/if}
	</div>
</div>
