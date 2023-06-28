import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {

    const code = url.searchParams.get('code') || null;
    const state = url.searchParams.get('state') || null;

    // 쿠키에 저장된 state와 challenge_verifier를 가져옴
    const storedState = cookies.get('spotify_auth_state') || null;
    const storedChallengeVerifier = cookies.get('spotify_auth_challenge_verifier') || null;

    if (state === null || state !== storedState) {
        throw error(400, 'State Mismatch!');
    }

    // state가 null이 아닐 경우, POST
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`
            ).toString('base64')}` //암호화 방식
        },
        body: new URLSearchParams({
            code: code || '',
            redirect_uri: `${BASE_URL}/spotify/api/auth/callback`,
            grant_type: 'authorization_code',
            code_verifier: storedChallengeVerifier || '',
            client_id: SPOTIFY_APP_CLIENT_ID
        })
    });
    const responseJSON = await response.json();

    if (responseJSON.error) {
        throw error(400, responseJSON.error_description);
    }

    // 사용하지 않는 쿠키 삭제
    cookies.delete('spotify_auth_state');
    cookies.delete('spotify_auth_challenge_verifier');

    // refresh_token을 쿠키에 저장하고, access_token을 쿠키에 저장하고, /spotify로 redirect
    //todo: 쿠키를 앱의 어떤곳에서든 사용하게 하려구 세번째 인수를 /로 둠. /spotify로 둬야하는지 고민임.
    cookies.set('refresh_token', responseJSON.refresh_token, { path: '/' });
    cookies.set('access_token', responseJSON.access_token, { path: '/' });
    console.log(responseJSON);
    throw redirect(303, '/spotify');
};

