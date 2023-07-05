//endpoint 생성
// 쿠키에서 엑세스 토큰을 가져와 spotify api에 요청을 보내고, 응답을 받음.
// 서버에서만 동작, 페이지 로드시 필요한 데이터를 받아옴.
import type { RequestHandler } from './$types';
import { SPOTIFY_BASE_URL } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch, cookies, params, url }) => {
    // 쿠키에서 access_token을 가져옴. -> spotify api에 요청을 보낼때 사용.
    const accessToken = cookies.get('access_token');

    //클라이언트가 요청한 url과 관련된 spotify 엔드포인트에 get요청을 보냄.
    const response = await fetch(`${SPOTIFY_BASE_URL}/${params.path}${url.search}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const responseJSON = await response.json();
    if (responseJSON.error) {
        throw error(responseJSON.error.status, responseJSON.error.message);
    }
    return json(responseJSON);
};