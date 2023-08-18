<script lang="ts">
	import { selectedDate } from '$stores/useLocStorage.js';
	import { onMount, afterUpdate } from 'svelte';
	import { getPomoRecords } from '$stores/useTauriStorage';
	import { settings } from '$stores/useLocStorage.js';
	let pomoRecords = [];
	let dayMinutes = ['10', '20', '30', '40', '50', '60'];

	let dayHours = [];
	let startTime = 11;

	afterUpdate(async () => {
		pomoRecords = await getPomoRecords($selectedDate);
		startTime = $settings.dayStartTime;
		dayHours = Array.from({ length: 24 }, (_, i) => ((i + startTime - 1) % 12) + 1);
	});
	let table = Array.from(Array(61), () => Array(25).fill(false));
	let color = '';
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
			<td
				class="text-xs sticky text-center py-0.5 px-1
						border border-primary-100
						bg-primary-600"
			>
				<span class="font-digital font-bold text-primary-50 dark:text-secondary-900" />
			</td>
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

		{#each dayHours as hour}
			<tr class="border-r-2 border-primary-600 dark:border-primary-100">
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
							bgcolor={color}
							class="py-0 border-l border-b border-primary-600 dark:border-primary-100"
						/>
					{:else}
						<td
							rowspan="2"
							bgcolor={color}
							class="py-0 border-l border-b border-b-primary-600 border-primary-100
                                    dark:border-primary-900 dark:border-b-primary-50"
						/>
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
