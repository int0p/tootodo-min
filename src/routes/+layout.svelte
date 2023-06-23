<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import {PomoTimer} from "$lib/pomodoro";
	import DragableBox from "$lib/DragableBox.svelte";
</script>

<DragableBox>
	<PomoTimer/>
</DragableBox>


<div class="flex-col h-[calc(100vh-2rem)]  w-[calc(100vw-2rem)] m-auto">
	<div class="relative w-1/3 h-auto min-w-[330px] max-w-[600px]">
		<TabGroup>
			<TabAnchor href="/" selected={$page.url.pathname === '/'}>Too</TabAnchor>
			<TabAnchor href="/daying" selected={$page.url.pathname === '/daying'}>Do</TabAnchor>
			<TabAnchor href="/blog" selected={$page.url.pathname === '/blog'}>Blog</TabAnchor>
			<LightSwitch class="absolute right-0 top-2.5"/>
		</TabGroup>
	</div>
	<div class="w-full h-full mt-2">
		<slot></slot>
	</div>
</div>


<!--&lt;!&ndash; App Shell &ndash;&gt;-->
<!--<AppShell>-->
<!--	<svelte:fragment slot="header">-->
<!--		&lt;!&ndash; App Bar &ndash;&gt;-->
<!--		<AppBar>-->
<!--			<svelte:fragment slot="lead">-->
<!--				<strong class="text-xl uppercase">Skeleton</strong>-->
<!--			</svelte:fragment>-->
<!--			<svelte:fragment slot="trail">-->
<!--				<a-->
<!--					class="btn btn-sm variant-ghost-surface"-->
<!--					href="https://discord.gg/EXqV7W8MtY"-->
<!--					target="_blank"-->
<!--					rel="noreferrer"-->
<!--				>-->
<!--					Discord-->
<!--				</a>-->
<!--				<a-->
<!--					class="btn btn-sm variant-ghost-surface"-->
<!--					href="https://twitter.com/SkeletonUI"-->
<!--					target="_blank"-->
<!--					rel="noreferrer"-->
<!--				>-->
<!--					Twitter-->
<!--				</a>-->
<!--				<a-->
<!--					class="btn btn-sm variant-ghost-surface"-->
<!--					href="https://github.com/skeletonlabs/skeleton"-->
<!--					target="_blank"-->
<!--					rel="noreferrer"-->
<!--				>-->
<!--					GitHub-->
<!--				</a>-->
<!--			</svelte:fragment>-->
<!--		</AppBar>-->
<!--	</svelte:fragment>-->
<!--	&lt;!&ndash; Page Route Content &ndash;&gt;-->
<!--	<slot />-->
<!--</AppShell>-->

