<script lang="ts">
	import type { LayoutData } from './$types';
	import type { PageData } from './$types';
	// export let data: LayoutData;
	import { Button, Card } from '$components';
	import { element } from 'svelte/internal';
	export let data: PageData;

	let sections: {
		title: string;
		path: string;
		items: (SpotifyApi.AlbumObjectSimplified | SpotifyApi.PlaylistObjectSimplified)[];
	}[] = [];

	$: {
		if (data.newReleases) {
			sections.push({
				title: 'New Releases',
				path: '/sections/new-releases',
				items: data.newReleases.albums.items
			});
		}
		if (data.featuredPlaylists) {
			sections.push({
				title: 'Featured Playlists',
				path: '/sections/featured-playlists',
				items: data.featuredPlaylists.playlists.items
			});
		}
		data.homeCategories.forEach((category, index) => {
			const categoryPlaylist = data.categoriesPlaylists[index];
			if (categoryPlaylist) {
				sections.push({
					title: category.name,
					path: `/category/${category.id}`,
					items: categoryPlaylist.playlists.items
				});
			}
		});
		if (data.userPlaylists) {
			sections.push({
				title: 'Your Playlists',
				path: '/spotify/playlists',
				items: data.userPlaylists.items
			});
		}
	}
</script>

{#each sections as section}
	<section class="content-row">
		<div class="content-row-header flex items-center justify-between">
			<div class="right">
				<h2 class="section-title">{section.title}</h2>
			</div>
			<div class="left">
				<Button element="a" href={section.path} variant="outline"
					>See All <span class="visually-hidden">{section.title}</span></Button
				>
			</div>
		</div>
		<div class="grid-items">
			{#each section.items as item}
				<div class="grid-item bg-black text-white">
					<Card {item} />
				</div>
			{/each}
		</div>
	</section>
{/each}

<style lang="scss">
	h1 {
		color: red;
		font-size: functions.toRem(36);
		@include breakpoint.up('md') {
			color: blue;
		}
		@include breakpoint.up('lg') {
			color: green;
		}
	}

	.content-row {
		margin-bottom: 40px;
		.content-row-header {
			margin-bottom: 20px;
			.section-title {
				font-size: functions.toRem(22);
				font-weight: 600;
				margin: 0;
			}
		}
	}
</style>
