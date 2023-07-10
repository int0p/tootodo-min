//페이지를 새로고침할때마다 실행됨
//쿠키 받음.
//`npm i @types/spotify-ap`으로 스포티파이에서 제공하는 타입 받아와야함.
//서버에서만 실행
import type { LayoutServerLoad } from './$types';
import { SPOTIFY_BASE_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies, fetch, url }) => {
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');

    if (!accessToken) {
        return {
            user: null
        };
    }

    //accessToken이 있을 경우 fetch를 통해 profile을 받아옴
    const profileRes = await fetch(`${SPOTIFY_BASE_URL}/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    //프로필을 app.d.ts파일의 PageData에 저장.
    if (profileRes.ok) {
        const profile: SpotifyApi.CurrentUsersProfileResponse = await profileRes.json();
        // console.log(profile);
        let userAllPlaylists: SpotifyApi.PlaylistObjectSimplified[] = [];
        const userPlaylistsRes = await fetch('/spotify/api/spotify/me/playlists?limit=50');
        if (userPlaylistsRes.ok) {
            const userPlaylistsResJSON: SpotifyApi.ListOfCurrentUsersPlaylistsResponse =
                await userPlaylistsRes.json();
            userAllPlaylists = userPlaylistsResJSON.items;
        }

        return {
            user: profile,
            userAllPlaylists
        };
    }
    //프로필을 받아오지 못했을 경우, refresh_token을 이용해 새로운 access_token을 받아옴.(api/auth/refresh) -> 잘 받았다면, 홈 화면(/spotify)으로 리다이렉트
    if (profileRes.status === 401 && refreshToken) {
        // refresh the token and try again
        const refreshRes = await fetch('/spotify/api/auth/refresh');
        if (refreshRes.ok) {
            // console.log(`유알엘 ${url.pathname}`);
            throw redirect(307, url.pathname);
        }
        return {
            user: null
        };
    } else {
        return {
            user: null
        };
    }
};