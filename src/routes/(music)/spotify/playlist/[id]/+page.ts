import { fetchRefresh } from '$helpers';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: _fetch, params, depends, route, url, parent }) => {
    depends(`app:${route.id}`);
    const { user } = await parent();
    const fetch = (path: string) => fetchRefresh(_fetch, path);

    const [playlistRes, isFollowingRes] = await Promise.all([
        fetch(`/spotify/api/spotify/playlists/${params.id}`),
        fetch(
            `/spotify/api/spotify/playlists/${params.id}/followers/contains?${new URLSearchParams({
                ids: user ? user.id : ''
            }).toString()}`
        )
    ]);

    if (!playlistRes.ok) {
        throw error(playlistRes.status, 'Failed to load playlist!');
    }


    let isFollowing: boolean | null = null;

    if (isFollowingRes.ok) {
        const isFollowingJSON: SpotifyApi.UsersFollowPlaylistResponse = await isFollowingRes.json();
        isFollowing = isFollowingJSON[0];
    }

    const playlistResJSON: SpotifyApi.SinglePlaylistResponse = await playlistRes.json();

    let color = null;
    if (playlistResJSON.images.length > 0) {
        const colorRes = await fetch(
            `../api/average-color?${new URLSearchParams({
                image: playlistResJSON.images[0].url
            }).toString()}`
        );

        if (colorRes.ok) {
            color = (await colorRes.json()).color;
        }
    }

    return {
        playlist: playlistResJSON,
        color,
        title: playlistResJSON.name,
        isFollowing
    };
};