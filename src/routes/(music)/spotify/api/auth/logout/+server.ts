//로그아웃 -> 기존에 저장된 쿠키 제거. 로그인 페이지로 리다이렉트
import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ cookies, request }) => {
    cookies.delete('refresh_token', { path: '/' });
    cookies.delete('access_token', { path: '/' });

    //fetch로부터 endpoint를 받았을 경우.
    if (request.headers.get('accept') === 'application/json') {
        return json({ success: true });
    }
    throw redirect(303, '/spotify/login');
};