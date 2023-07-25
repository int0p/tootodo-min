<!-- theme, tab bar-->
<script lang="ts">
	// theme
	import '../theme.postcss';
	import '$styles/spotify.scss';

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
	import { LightSwitch, TableOfContents } from '@skeletonlabs/skeleton';

	// import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	//icon
	import {Play, SkipBack, SkipForward, Music4, Sticker, Repeat1, Maximize2} from 'lucide-svelte';

	// navigation
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';

	// pomodoro timer
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	// page info
	// $:console.log($page.data.title);
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import {HeaderNav, PomoSmall} from "$components";
	import {currentTime} from "$stores/time";
	NProgress.configure({ showSpinner: false });
	afterNavigate(() => {
		NProgress.done();
	});
	beforeNavigate(() => {
		NProgress.start();
		console.log();
	});

	let onSpotify = false;
	$: {
		if ($page.url.pathname.includes('/spotify')) {
			onSpotify = true;
		} else {
			onSpotify = false;
		}
	}
</script>

<svelte:head>
	<title>Tootodo {$page.data.title ? ` - ${$page.data.title}` : ''}</title>
</svelte:head>


<div class="flex-col h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] m-auto">
	<div class="flex h-14 relative top-4">
		<div class="left-0 mr-2">
			<HeaderNav />
		</div>

		<!--		tab-->
		<div class="flex justify-between w-[calc(100%-400px)]  relative -top-3 space-x-2 ">
			<TabGroup
					justify="justify-start"
					class="w-[240px]"
			>
				<TabAnchor
						on:click={() => goto('/too')}
						selected={$page.url.pathname.includes('/too')}
				><span class="relative top-1 ">Too</span>
				</TabAnchor>

				<TabAnchor
						selected={$page.url.pathname.includes('/too') ||
							$page.url.pathname.includes('/do')||
							$page.url.pathname === '/'}
				>
					<div class="crumb-separator relative top-1" aria-hidden>&rsaquo;</div>
				</TabAnchor>

				<TabAnchor
						on:click={() => goto('/do')}
						selected={$page.url.pathname.includes('/do') || $page.url.pathname === '/'}
				><span class="relative top-1">Do</span>
				</TabAnchor>

				<TabAnchor
						on:click={() => goto('/blog')}
						class=""
						selected={$page.url.pathname === '/blog'}
				>
					<Sticker size="24" class="relative top-1" strokeWidth={1.5} />
				</TabAnchor>
			</TabGroup>

			<TabGroup
					justify="justify-start"
					class="w-full"
			>
				<TabAnchor
						on:click={() => goto('/spotify')}
						selected={$page.url.pathname.includes('/spotify')}
						class="relative w-full h-full"
				>
					<Music4 size="24" class="relative top-1" strokeWidth={1.5} />
					<div class="chip absolute top-1 left-4 w-[calc(100%-130px)] h-full px-2 text-[1rem]">재생중인 노래가 없습니다</div>
					<div class="chip variant-glass-primary py-1 px-2 absolute bottom-1 right-24
    									dark:bg-primary-500/50 dark:text-white">
						<span><Repeat1 size={16} /></span>
					</div>
				</TabAnchor>

				<div class="absolute flex -right-2.5 top-2.5 z-10 rounded-lg  text-black
				divide-x  divide-black dark:text-white dark:divide-white
				border border-surface-400-500-token
				 "
					 class:onSpotify
				>
					<button class="btn py-1.5 px-2 rounded-none">
						<span><SkipBack size={14} class="dark:fill-white/70 " /></span>
					</button>
					<button class="btn py-1.5 px-2 rounded-none ">
						<span><Play size={16} class="dark:fill-white/70 fill-surface-900" /></span>
					</button>
					<button class="btn py-1.5 px-2 rounded-none">
						<span><SkipForward size={14} class="dark:fill-white/70" /></span>
					</button>
				</div>
			</TabGroup>
		</div>

		<div class="flex absolute right-0 top-1 space-x-2">
			<!--		pomodoro -->
			<div class="relative -top-1">
				<PomoSmall/>
			</div>
<!--			current time-->
			<div class=" font-digital text-primary-500 font-bold text-xl ">{$currentTime.shortTime}</div>
			<!--		dark/light mode switch-->
			<LightSwitch class=" dark:bg-zinc-950 " />
		</div>
	</div>

	<div class="w-full h-full">
		<slot />
	</div>
</div>

<style>
	.onSpotify{
		@apply border-2 border-surface-900 dark:border-white;
	}
</style>