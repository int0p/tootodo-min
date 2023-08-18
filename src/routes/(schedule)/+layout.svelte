<script>
	import { TodoList } from '$components';
	import SideShell from '$schedule/SideShell.svelte';
	import { SelectDateSmall } from '$components/index.ts';
	import { LampDesk } from 'lucide-svelte';

	let showTargetTodoList = true;
	let showWeekly = false;
</script>

<div class="flex w-full h-full">
	<!-- left-->
	{#if showTargetTodoList}
		<!--290px-->
		<SideShell>
			<!--            날짜 선택-->
			<svelte:fragment slot="navi"><SelectDateSmall bind:showWeekly /></svelte:fragment>
			<svelte:fragment slot="content"><TodoList {showWeekly} /></svelte:fragment>
		</SideShell>
	{/if}

	<!-- right-->
	<div
		class="flex-col items-center justify-center w-full h-full relative"
		class:reduceWidth={showTargetTodoList}
	>
		<button
			on:click={() => (showTargetTodoList = !showTargetTodoList)}
			class:flip={showTargetTodoList}
			class="absolute left-0 top-3 z-10 anchor"
		>
			<LampDesk size="20px" class="dark:shadow-lg dark:shadow-primary-300" />
		</button>

		<slot />
	</div>
</div>
<!--    <div class="flex-col w-1/3 h-full relative min-w-[330px] max-w-[380px]">-->
<!--        <slot/>-->
<!--    </div>-->

<!--    &lt;!&ndash;        editor&ndash;&gt;-->
<!--    <div class="w-3/4 ml-2 h-full">-->
<!--        <Editor/>-->
<!--    </div>-->

<!--    <div class="absolute right-0 timer ">-->
<!--&lt;!&ndash;        <PomoTimer/>&ndash;&gt;-->
<!--    </div>-->

<!--<style lang="scss">-->
<!--    .timer{-->
<!--          @include breakpoint.down('xl') {-->
<!--            visibility: hidden;-->
<!--          }-->
<!--    }-->
<!--    .editor{-->
<!--      @include breakpoint.up('xl') {-->
<!--        width: calc(100% - 770px);-->
<!--      }-->
<!--    }-->
<!--</style>-->

<style>
	.reduceWidth {
		width: calc(100%- 290px);
		overflow: hidden;
	}

	.flip {
		transform: scaleX(-1);
	}
</style>
