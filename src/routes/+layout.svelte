<!-- theme, tab bar-->
<script lang='ts'>
	// theme
	import "../theme.postcss";
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// import '@skeletonlabs/skeleton/themes/theme-modern.css'; //팝팦 핑크
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css'; //깔끔초록
	// import '@skeletonlabs/skeleton/themes/theme-rocket.css'; //옥..? 이상함.
	// import '@skeletonlabs/skeleton/themes/theme-seafoam.css'; //별로인 초록
	// import '@skeletonlabs/skeleton/themes/theme-sahara.css'; //별로인 빨강 -> primary바꾸면 예쁠듯.
	// import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css'; //파스텔 퍼렁
	// import '@skeletonlabs/skeleton/themes/theme-crimson.css'; //깔끔 빨강
	// import '@skeletonlabs/skeleton/themes/theme-seasonal.css'; //깔끔 초록
	// import '@skeletonlabs/skeleton/themes/theme-vintage.css'; //옛 주황

	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {LightSwitch, TableOfContents} from '@skeletonlabs/skeleton';

	// import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	//icon
	import {Music4, Sticker} from 'lucide-svelte';
	// navigation
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';

	// pomodoro timer
	import { page } from '$app/stores';
	import {DragableBox,PomoTimer} from "$components";
</script>

<DragableBox>
	<PomoTimer/>
</DragableBox>

<div class="flex-col h-[calc(100vh-2rem)]  w-[calc(100vw-2rem)] m-auto mt-1">
	<div class="flex">
<!--		tab-->
		<div class="relative w-1/3 h-auto min-w-[330px] max-w-[450px]">
			<TabGroup class="w-full">
				<div class="flex items-center justify-center">
					<TabAnchor href="/too" selected={$page.url.pathname === '/too'}>Too </TabAnchor>
					<TabAnchor selected={$page.url.pathname === '/too' || $page.url.pathname === '/do' || $page.url.pathname === '/'}><div class="crumb-separator" aria-hidden>&rsaquo;</div></TabAnchor>
					<TabAnchor href="/do" selected={$page.url.pathname === '/do' || $page.url.pathname === '/'}>Do</TabAnchor>
					<TabAnchor href="/music-home" selected={$page.url.pathname === '/music-home'} class="w-1/5 "><Music4 size="22" class="relative top-0.5" strokeWidth={1.5} /></TabAnchor>
					<TabAnchor href="/blog" selected={$page.url.pathname === '/blog'} class="w-1/5"><Sticker size="22" class="relative top-0.5" strokeWidth={1.5} /></TabAnchor>
				</div>
				<LightSwitch class="absolute right-0 top-2.5 border-primary-300 border dark:bg-zinc-950 "/>
			</TabGroup>

		</div>
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

