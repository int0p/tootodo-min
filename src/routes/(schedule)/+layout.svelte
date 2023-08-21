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
		<div class="flex-col dailyTodo w-[290px] min-w-[290px] h-full relative mr-4">
			<div class="header h-8 my-2 flex justify-between bg-none">
				<SelectDateSmall bind:showWeekly />
			</div>
			<hr class="!border-dashed border-2 mb-2" />
			<div class="w-full h-[clac(100%-80px)] overflow-y-auto">
				<TodoList {showWeekly} />
			</div>
		</div>
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
	.dailyTodo {
		@apply rounded-r-2xl rounded-l-none border-double border-4 border-primary-400 dark:border-primary-700;
	}
</style>
