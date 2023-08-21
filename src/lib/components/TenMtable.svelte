<script lang="ts">
	import { selectedDate } from '$stores/useLocStorage.js';
	import { afterUpdate, onMount } from 'svelte';
	import { getPomoRecords } from '$stores/useTauriStorage';
	import { settings } from '$stores/useLocStorage.js';
	let pomoRecords = [];
	let dayMinutes = ['10', '20', '30', '40', '50', '60'];

	let dayHours = [];
	let dayStartTime = 11;
	let table = [];
	let color = '';

	afterUpdate(async () => {
		pomoRecords = await getPomoRecords($selectedDate);

		dayStartTime = $settings.dayStartTime;
		let dayEndTime = $settings.dayEndTime;
		if (dayStartTime > dayEndTime) {
			dayEndTime += 24;
		}
		let hourLength = dayEndTime - dayStartTime;
		dayHours = Array.from({ length: hourLength }, (_, i) => ((i + dayStartTime - 1) % 12) + 1);
		table = Array.from(Array(dayHours.length), () => Array(60).fill(color));
	});
	//cycles -> table
	$: {
		if (pomoRecords && Array.isArray(pomoRecords)) {
			pomoRecords.forEach((pomoRecord) => {
				pomoRecord.cycles.forEach((cycle) => {
					//cycle = {start: "03:23 PM", end: "03:28 PM", studyTime: 300}
					//end시간이 dayStart ~ dayEnd 범위 밖일 경우 고려 안 함.

					let start = cycle.start;
					let end = cycle.end;
					//todo: color
					// let todoColor = pomoRecord.todo.color;
					let todoColor = '#c32734';

					let startHour = Number(start.split(':')[0]);
					let startMin = Number(start.split(':')[1].split(' ')[0]);
					let startAmPm = String(start.split(':')[1].split(' ')[1]);

					let endHour = Number(end.split(':')[0]);
					let endMin = Number(end.split(':')[1].split(' ')[0]);
					let endAmPm = String(end.split(':')[1].split(' ')[1]);

					let startHourIdx =
						startAmPm === 'AM' && startHour !== 12
							? startHour - dayStartTime
							: startHour + 12 - dayStartTime;
					let endHourIdx =
						endAmPm === 'AM' && startHour !== 12
							? endHour - dayStartTime
							: endHour + 12 - dayStartTime;
					let startMinIdx = startMin;
					let endMinIdx = endMin;

					if (startHourIdx === endHourIdx) {
						for (let min = startMinIdx; min <= endMinIdx; min++) {
							table[startHourIdx][min] = todoColor;
						}
					} else {
						//startHour
						for (let min = startMinIdx; min < 60; min++) {
							table[startHourIdx][min] = todoColor;
						}

						//startHour + 1 ~ endHour - 1
						for (let hour = startHourIdx + 1; hour < endHourIdx; hour++) {
							for (let min = 0; min < 60; min++) {
								table[hour][min] = todoColor;
							}
						}

						//endHour
						for (let min = 0; min <= endMinIdx; min++) {
							table[endHourIdx][min] = todoColor;
						}
					}
				});
			});
			// console.log(table);
		}
	}
</script>

<!-- result table-->
<div
	class="text-center text-sm
         w-full h-full"
>
	<table
		class="w-full border-collapse border-2 border-l-0 border-primary-600 dark:border-primary-100"
	>
		<!--        몇분?-->
		<tr class="sticky -top-0.5">
			<th class="p-2 bg-primary-100 !border-primary-100" />
			<td
				class="text-xs sticky text-center py-0.5 px-1
						border border-primary-100
						bg-primary-600"
			/>
			<td
				class="text-xs sticky text-center py-0.5 px-1
						border border-primary-100
						bg-primary-600 w-1/4"
			>
				<span class="font-digital font-bold text-primary-50 dark:text-secondary-900">PLAN</span>
			</td>
			{#each dayMinutes as min}
				<td
					colspan="10"
					class="text-xs sticky text-center py-0.5 px-1
						border border-primary-100
						bg-primary-600"
				>
					<span class="font-digital font-bold text-primary-50 dark:text-secondary-900">{min}</span>
				</td>
			{/each}
		</tr>

		{#each dayHours as hour, i}
			<tr class="">
				<!--                row header -> 몇시-->
				<th rowspan="2" class="text-xs py-0 px-0.5 border bg-primary-700 text-white font-bold">
					<span class="font-digital text-primary-50 dark:text-secondary-50">{hour}</span>
				</th>
				<!--                30분 단위로 계획 세움-->
				<td
					class="py-0 border-b border-primary-600 dark:border-primary-50 border-dotted font-digital"
					>0</td
				>
				<td class="py-0 border border-primary-600 dark:border-primary-100" />

				<!--                work결과 10분단위로 보여줌-->
				{#each Array(60) as _, min}
					{#if min % 10 == 0}
						<td
							rowspan="2"
							style="background-color: {table[i][min]}"
							class="py-0 border-l border-dashed border-b border-primary-500 dark:border-primary-50"
						/>
					{:else if min % 2 == 0}
						<td
							rowspan="2"
							style="background-color: {table[i][min]}"
							class="py-0 border-b border-b-primary-500 dark:border-b-primary-50"
						/>
					{:else}
						<td rowspan="2" style="background-color: {table[i][min]}" class="py-0" />
					{/if}
				{/each}
			</tr>
			<!--            rowspan 간격 맞추기 위함.-->
			<tr>
				<td class="py-0 border-b border-primary-600 dark:border-primary-100 font-digital">30</td>
				<td class="py-0 border border-primary-600 dark:border-primary-100" />
			</tr>
		{/each}
	</table>
</div>
