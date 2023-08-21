<script>
	import { selectedDate } from '$stores/useLocStorage.js';
	import { afterUpdate, onMount } from 'svelte';
	import { getPomoRecords } from '$stores/useTauriStorage';
	import { settings } from '$stores/useLocStorage.js';
	import { minutesToCustomString, addTime } from '$helpers';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	let pomoRecords = [];
	let dayMinutes = ['10', '20', '30', '40', '50', '60'];

	let dayHours = [];
	let dayStartTime = 11;
	let dayEndTime = 23;
	let colorTable = [];

	afterUpdate(async () => {
		try {
			pomoRecords = await getPomoRecords($selectedDate);
			getDayHours();
			colorTable = Array.from(Array(dayHours.length), () =>
				Array(60).fill({
					color: 'transparent',
					studyTime: 0
				})
			);
			getColorTableFromPomoRecords();
		} catch (error) {
			console.error('Failed to update pomoRecords:', error);
		}
	});

	function getDayHours() {
		if ($settings) {
			dayStartTime = $settings.dayStartTime;
			dayEndTime = $settings.dayEndTime;
			if (dayStartTime && dayEndTime) {
				if (dayStartTime > dayEndTime) {
					dayEndTime += 24;
				}
				let hourLength = dayEndTime - dayStartTime;
				dayHours = Array.from({ length: hourLength }, (_, i) => ((i + dayStartTime - 1) % 12) + 1);
			}
		}
	}

	//cycles -> table
	function getColorTableFromPomoRecords() {
		if (colorTable && pomoRecords && Array.isArray(pomoRecords)) {
			pomoRecords.forEach((pomoRecord) => {
				pomoRecord.cycles.forEach((cycle) => {
					//cycle = {start: "03:23 PM", end: "03:28 PM", studyTime: 300}
					//end시간이 dayStart ~ dayEnd 범위 밖일 경우 고려 안 함.

					let { hour: startHour, minute: startMin } = parseTime(cycle.start);
					let { hour: endHour, minute: endMin } = parseTime(cycle.end);
					let todoColor = 'rgb(var(--color-pomodoro-600)';

					//하루가 지났을 경우
					if (endHour < startHour) {
						endHour += 24;
					}

					//boundary conditon, hour
					if (startHour < dayStartTime && endHour < dayStartTime) {
						return;
					}

					if (startHour < dayStartTime && endHour >= dayStartTime) {
						startHour = dayStartTime;
						startMin = 0;
					}

					if (startHour < dayEndTime && endHour > dayEndTime) {
						endHour = dayEndTime - 1;
						endMin = 60;
					}

					if (startHour > dayEndTime && endHour > dayEndTime) {
						return;
					}

					let startHourIdx = startHour - dayStartTime;
					let endHourIdx = endHour - dayStartTime;
					let startMinIdx = startMin;
					let endMinIdx = endMin;

					colorTable[startHourIdx][startMinIdx] = {
						studyTime: cycle.studyTime,
						color: todoColor
					};

					if (startHourIdx === endHourIdx) {
						for (let min = startMinIdx + 1; min < endMinIdx; min++) {
							colorTable[startHourIdx][min] = {
								...colorTable[startHourIdx][min],
								color: todoColor
							};
						}
					} else {
						//startHour
						for (let min = startMinIdx + 1; min < 60; min++) {
							colorTable[startHourIdx][min] = {
								...colorTable[startHourIdx][min],
								color: todoColor
							};
						}

						//startHour + 1 ~ endHour - 1
						for (let hour = startHourIdx + 1; hour < endHourIdx; hour++) {
							for (let min = 0; min < 60; min++) {
								colorTable[hour][min] = {
									...colorTable[hour][min],
									color: todoColor
								};
							}
						}

						//endHour
						for (let min = 0; min < endMinIdx; min++) {
							colorTable[endHourIdx][min] = {
								...colorTable[endHourIdx][min],
								color: todoColor
							};
						}
					}
				});
			});
			// console.log(colorTable);
		}
	}

	function parseTime(timeStr) {
		let [hourStr, minutePart] = timeStr.split(':');
		let [minuteStr, amPm] = minutePart.trim().split(' ');

		let hour = Number(hourStr);
		let minute = Number(minuteStr);

		if (amPm === 'PM' && hour !== 12) {
			hour += 12;
		} else if (amPm === 'AM' && hour === 12) {
			hour = 0;
		}

		return { hour, minute };
	}

	let showStudyRecord = false;
</script>

<!-- result table-->
<div class="text-center text-sm h-full relative">
	<table
		class="w-full relative border-collapse border-2 border-l-0 border-primary-600 dark:border-primary-100"
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
					<td
						rowspan="2"
						style="background-color: {colorTable[i][min].color}"
						class="py-0 {min % 10 === 0
							? 'border-l border-dashed border-b border-primary-500 dark:border-primary-50'
							: min % 2 === 0
							? 'border-b border-b-primary-500 dark:border-b-primary-50'
							: ''}"
					>
						{#if colorTable[i][min].studyTime && showStudyRecord}
							<div class={min > 50 ? 'studyTime-bottom' : 'studyTime'}>
								{minutesToCustomString(colorTable[i][min].studyTime).slice(0, 5)}
							</div>
						{/if}
					</td>
				{/each}
			</tr>
			<!--            rowspan 간격 맞추기 위함.-->
			<tr>
				<td class="py-0 border-b border-primary-600 dark:border-primary-100 font-digital">30</td>
				<td class="py-0 border border-primary-600 dark:border-primary-100" />
			</tr>
		{/each}
	</table>
	<SlideToggle
		size="sm"
		bind:checked={showStudyRecord}
		class="sticky z-10 bottom-2 transform translate-x-[140px] shadow"
		active="bg-rose-950"
		background="bg-primary-600"
	/>
</div>

<style>
	.studyTime {
		@apply absolute opacity-90 transform translate-x-1.5 -translate-y-4 rounded-md px-1
			 bg-rose-950  text-white border-emerald-700 border-2;
	}
	.studyTime-bottom {
		@apply absolute opacity-90 transform -translate-x-11 -translate-y-1 rounded-md px-1
			 bg-rose-950  text-white border-emerald-700 border-2;
	}
</style>
