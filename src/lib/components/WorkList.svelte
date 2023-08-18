<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let valueSingle = 'X';
</script>

<ListBox
	class="flex flex-wrap justify-start items-center space-x-1 w-full h-full overflow-y-scroll hide-scrollbar"
>
	<ListBoxItem bind:group={valueSingle} name="medium" value="X" class="!py-0 relative left-1"
		>X</ListBoxItem
	>
	<ListBoxItem bind:group={valueSingle} name="medium" value="OS" class="!py-0">OS</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="CS" class="!py-0">CS</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="Dev" class="!py-0">Dev</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="UI" class="!py-0">UI</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="FE" class="!py-0">FE</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="BE" class="!py-0">BE</ListBoxItem>
	<ListBoxItem bind:group={valueSingle} name="medium" value="Books" class="!py-0">Books</ListBoxItem
	>
</ListBox>
