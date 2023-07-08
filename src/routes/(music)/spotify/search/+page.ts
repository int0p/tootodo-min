import { fetchRefresh } from '$helpers';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';


export const load: PageLoad = async ({ fetch, url }) => {
    const query = url.searchParams.get('q');
    if (query) {
        throw redirect(307, `/spotify/search/${query}`);
    }
    const catsRes = await fetchRefresh(fetch, `/spotify/api/spotify/browse/categories?limit=50`);
    return {
        title: 'Search',
        categories: catsRes.ok
            ? (catsRes.json() as Promise<SpotifyApi.MultipleCategoriesResponse>)
            : undefined
    };
};