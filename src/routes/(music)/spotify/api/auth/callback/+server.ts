//spotify로부터 authorization code와 state를 받아와 access token과 refresh token으로 교환
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
    //spotify accounts서비스로 authorization code와 state 받아옴.
    const code = url.searchParams.get('code') || null;
    const state = url.searchParams.get('state') || null;

    // 쿠키에 저장된 state와 challenge_verifier를 가져옴
    const storedState = cookies.get('spotify_auth_state') || null;
    const storedChallengeVerifier = cookies.get('spotify_auth_challenge_verifier') || null;

    //쿠키에 저장된값과 스포티파이로부터 받아온 값이 일치하는지 확인.
    if (state === null || state !== storedState) {
        throw error(400, 'State Mismatch!');
    }

    // state가 null이 아닐 경우, authorization code를 access token과 refresh token으로 교환
    // 스포티파이 엑세스 토큰 발급 서버 주소: https://accounts.spotify.com/api/token
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', //인코딩된 본문 형식
            Authorization: `Basic ${Buffer.from(
                `${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}` 
            ).toString('base64')}` //암호화 방식. 스포티파이가 앱을 식별할 수 있게해줌.
        },
        /*
        code: 사용자가 앱을 승인한 후 스포티파이가 제공한 인증 코드입니다.
        redirect_uri: 스포티파이가 인증 코드를 보낼 때 사용한 리다이렉트 URI와 동일해야 합니다.
        grant_type: 이는 OAuth 2.0 표준에서 인증 코드를 토큰으로 교환하는 방식을 나타내는 값으로, 'authorization_code'라는 값이 들어갑니다.
        code_verifier: 이전에 생성한 코드 verifier (PKCE를 사용하는 경우)
        client_id: 앱을 식별하는 데 사용되는 스포티파이 클라이언트 ID입니다.
         */
        body: new URLSearchParams({
            code: code || '',
            redirect_uri: `${BASE_URL}/spotify/api/auth/callback`,
            grant_type: 'authorization_code',
            code_verifier: storedChallengeVerifier || '',
            client_id: SPOTIFY_APP_CLIENT_ID
        })
    }); //response

    const responseJSON = await response.json();

    if (responseJSON.error) {
        throw error(400, responseJSON.error_description);
    }

    //이젠 사용하지 않는 쿠키 삭제
    cookies.delete('spotify_auth_state');
    cookies.delete('spotify_auth_challenge_verifier');

    // refresh_token와 access_token을 쿠키에 저장. 해당 토큰으로 스포티파이 API에 접근 가능.
    //path 변수로 토큰의 노출 범위 제한
    //todo: 쿠키를 앱의 어떤곳에서든 사용하게 하려구 세번째 인수를 /로 둠. /spotify로 둬야하는지 고민임.
    cookies.set('refresh_token', responseJSON.refresh_token, { path: '/' });
    cookies.set('access_token', responseJSON.access_token, { path: '/' });
    // console.log(responseJSON);
    throw redirect(303, '/spotify');
};

