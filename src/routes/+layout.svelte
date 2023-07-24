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
	import { Music4, Sticker } from 'lucide-svelte';
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
	import {HeaderNav} from "$components";
	import {currentTime} from "$stores/time";
	NProgress.configure({ showSpinner: false });
	afterNavigate(() => {
		NProgress.done();
	});
	beforeNavigate(() => {
		NProgress.start();
		console.log();
	});
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
		<div class="flex justify-between w-[calc(100%-250px)]  relative -top-3 space-x-2 ">
			<TabGroup
					justify="justify-start"
					class="w-[250px]"
			>
				<TabAnchor
						on:click={() => goto('/too')}
						selected={$page.url.pathname.includes('/too')}
				>Too
				</TabAnchor>

				<TabAnchor
						selected={$page.url.pathname.includes('/too') ||
							$page.url.pathname.includes('/do')||
							$page.url.pathname === '/'}
				>
					<div class="crumb-separator" aria-hidden>&rsaquo;</div>
				</TabAnchor>

				<TabAnchor
						on:click={() => goto('/do')}
						selected={$page.url.pathname.includes('/do') || $page.url.pathname === '/'}
				>Do
				</TabAnchor>

				<TabAnchor
						on:click={() => goto('/blog')}
						class=""
						selected={$page.url.pathname === '/blog'}
				>
					<Sticker size="24" class="relative top-0.5" strokeWidth={1.5} />
				</TabAnchor>
			</TabGroup>

			<TabGroup
					justify="justify-start"
					class="w-full"
			>
				<TabAnchor
						on:click={() => goto('/spotify')}
						selected={$page.url.pathname.includes('/spotify')}
				>
					<Music4 size="24" class="relative top-0.5" strokeWidth={1.5} />
				</TabAnchor>
			</TabGroup>

		</div>


		<div class="flex absolute right-0 space-x-2">
			<div class="curTime font-digital ">{$currentTime.shortTime}</div>
			<LightSwitch class=" dark:bg-zinc-950 " />
		</div>
	</div>

	<div class="w-full h-full">
		<slot />
	</div>
</div>

<style>
	.curTime{
		@apply text-primary-500 font-bold text-xl;
	}

</style>