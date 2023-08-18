<script>
	// import {defaultdaySet as defaultday} from "$stores/defaultSet.ts";
	import { settings } from '$stores/useLocStorage.js';
	// import daySetting from "$stores/daySetting.js";
	import { onMount, onDestroy } from 'svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { RotateCcw } from 'lucide-svelte';
	import { dataset_dev } from 'svelte/internal';

	let dayDefaultSet;

	let daySet = {
		dayStartTime: 9,
		dayEndTime: 24
	};

	onMount(() => {
		dayDefaultSet = { ...$settings };
		daySet = { ...dayDefaultSet };
	}); //$daySetting의 디폴트값  전달.

	//저장하지 않고 종료시 초기화
	let set = false; //저장 여부 확인

	onDestroy(() => {
		daySet = { ...dayDefaultSet };
	});

	$: {
		if (daySet.dayEndTime > 24) daySet.dayEndTime = 24;
		if (daySet.dayStartTime > 24) daySet.dayStartTime = 24;
		if (daySet.dayEndTime < 1) daySet.dayEndTime = 1;
		if (daySet.dayStartTime < 1) daySet.dayStartTime = 1;
	}
</script>

<form
	class="flex-col w-full h-full p-4"
	action="#"
	on:mouseleave={() => {
		if (!set) daySet = { ...dayDefaultSet };
	}}
>
	<div class="flex justify-between relative">
		<h3 class="mb-4 text-xl font-medium">Settings</h3>
		<LightSwitch class=" dark:bg-zinc-800 absolute right-0 top-3 " />
	</div>

	<div class="flex-col w-full justify-between items-start space-y-4">
		<label class="space-y-2 w-full">
			<span class="title">하루 시작 시간</span>
			<input
				type="number"
				step="1"
				max="24"
				min="1"
				name="day start time"
				required
				class="w-full"
				bind:value={daySet.dayStartTime}
			/>
		</label>
		<label class="space-y-2 w-full">
			<span class="title">하루 끝 시간</span>
			<input
				type="number"
				step="1"
				max="24"
				min="1"
				name="day end time"
				required
				class="w-full"
				bind:value={daySet.dayEndTime}
			/>
		</label>
	</div>

	<div class="flex w-full justify-between space-x-2 mt-5 border-t-2 pt-4 border-tertiary-500">
		<button
			type="button"
			class="w-1/3 rounded-full variant-glass-primary btn !text-primary-900"
			on:click={() => {
				daySet = { ...dayDefaultSet };
				set = false;
			}}><RotateCcw size={18} strokeWidth={2.5} /></button
		>
		<button
			type="button"
			class="w-2/3 !py-1 shadow variant-soft-tertiary dark:text-tertiary-900 text-[0.9rem] font-bold"
			on:click={() => {
				$settings = { ...daySet };
				set = true;
			}}>저장</button
		>
	</div>
</form>

<style>
	.title {
		@apply font-bold;
	}
</style>
