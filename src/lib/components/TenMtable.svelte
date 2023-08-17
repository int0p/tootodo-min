<script lang="ts">
	import { selectedDate } from '$stores/useLocStorage.js';
	import { invoke } from '@tauri-apps/api/tauri';
	let pomoRecords = [];
	$: {
		if ($selectedDate) {
			getPomoRecords();
		}
	}
	async function getPomoRecords() {
		pomoRecords = JSON.parse(
			JSON.parse(
				await invoke('get_timer_by_date', {
					date: $selectedDate
				})
			)
		);
		pomoRecords.forEach((pomoRecord) => {
			pomoRecord.cycles = JSON.parse(pomoRecord.cycles);
		});
		// console.log(pomoRecords);
		// console.log(Array.isArray(pomoRecords));
	}
	const startTime = 10;
	let dayMinutes = ['', 'PLAN', '10', '20', '30', '40', '50', '60'];
	let dayHours = Array.from({ length: 24 }, (_, i) => ((i + startTime - 1) % 12) + 1); //0시때문에 +1함

	let table = Array.from(Array(dayMinutes.length), () => Array(dayHours.length).fill(false));
</script>

<!-- result table-->
<div
	class="text-center text-sm
         w-full h-full"
>
	<table class="w-full border-collapse">
		<!--        몇분?-->
		<tr class="sticky top-0">
			<th class="p-2 bg-primary-100 border border-primary-100" />
			{#each dayMinutes as min}
				<td
					class="text-xs sticky text-center py-0.5 px-1
                            border border-primary-100
                            bg-primary-600"
				>
					<span class="font-digital font-bold text-primary-50 dark:text-secondary-900">{min}</span>
				</td>
			{/each}
		</tr>

		{#each dayHours as hour}
			<tr>
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
				{#each Array(6) as _, i}
					<td rowspan="2" class="py-0 border border-primary-600 dark:border-primary-100" />
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
