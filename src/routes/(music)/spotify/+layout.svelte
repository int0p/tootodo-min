<script lang="ts">
	import { Navigation, Header, Toasts, SearchForm } from '$components';
	import type { LayoutData } from './$types';
	import '$styles/spotify.scss';
	import { page } from '$app/stores';
	import MicroModal from 'micromodal';
	import { browser } from '$app/environment';
	if (browser) {
		MicroModal.init();
	}
	let topbar: HTMLElement;
	let scrollY: number;
	let headerOpacity = 0;

	$: if (topbar) {
		headerOpacity = scrollY / topbar.offsetHeight < 1 ? scrollY / topbar.offsetHeight : 1;
	}

	export let data: LayoutData;
	// $: console.log(topbar && scrollY / topbar.offsetHeight);
	// $: console.log(scrollY)
	$: user = data.user;
</script>

<!-- todo 나중에 music player 추가 -->
<div class="absolute top-4 right-10">
	{$page.url}
</div>

<div class="m-auto h-[calc(100vh - 4rem)] w-[calc(100vh - 2rem)]">
	<div id="main" class="w-full h-full">
		{#if user}
			<div id="sidebar">
				<Navigation desktop={true} />
			</div>
		{/if}

		<div id="content" class="w-full relative">
			{#if user}
				<div id="topbar" bind:this={topbar} class="border-b-2 fixed w-[calc(100%-2rem)]">
					<div
						class="topbar-bg w-full absolute"
						style:background-color={$page.data.color ? $page.data.color : 'var(--header-color)'}
						style:opacity={`${headerOpacity}`}
					/>
					<Header />
				</div>
			{/if}
			<main
				id="main-content"
				class:logged-in={user}
				class="hide-scrollbar w-full p-4"
				on:scroll={(e) => (scrollY = e.target.scrollTop)}
			>
				{#if $page.url.pathname.startsWith('/spotify/search')}
					<div class="search-form">
						<SearchForm />
					</div>
				{/if}
				<slot />
			</main>
		</div>
	</div>
</div>

<Toasts />

<style lang="scss">
	#main {
		display: flex;
		@apply bg-zinc-500/30 rounded-2xl shadow-lg items-center;

		#content {
			flex: 1;
			#topbar {
				height: var(--header-height);
				padding: 0 15px;
				display: flex;
				align-items: center;
				z-index: 100;
				.topbar-bg {
					@apply rounded-t-2xl rounded-l-none;
					height: 100%;
					top: 0;
					left: 0;
					z-index: -1;
					background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
				}
				@include breakpoint.up('md') {
					width: calc(100% - var(--sidebar-width) - 2rem);
				}
			}
			main#main-content {
				height: calc(100vh - 4rem);
				.search-form {
					margin-bottom: 40px;
					@include breakpoint.up('md') {
						display: none;
					}
					:global(input) {
						width: 100%;
					}
				}
				&.logged-in {
					padding-top: calc(30px + var(--header-height));
					@apply overflow-y-scroll max-h-[calc(100%-70px)];
				}
			}
		}
	}
</style>
