//스포티파이 access token이 만료됐을 때 access token을 새로 받아오는 api
import type { RequestHandler } from './$types';
import { SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, fetch }) => {
    const refreshToken = cookies.get('refresh_token');

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`
            ).toString('base64')}`
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken || ''
        })
    });

    const responseJSON = await response.json();
    //refresh_token에 오류가 있을 시 저장된 쿠키를 제거하고 로그아웃.
    if (responseJSON.error) {
        cookies.delete('refresh_token', { path: '/' });
        cookies.delete('access_token', { path: '/' });
        throw error(401, responseJSON.error_description);
    }

    // 새 토큰을 쿠키에 저장
    cookies.set('refresh_token', responseJSON.refresh_token, { path: '/' });
    cookies.set('access_token', responseJSON.access_token, { path: '/' });

    return json(responseJSON);
};