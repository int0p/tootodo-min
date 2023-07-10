//서버와 클라이언트 모두에서 실행
// 로그인 여부에 따라 경로 설정. 

import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data, url }) => {
    const { user, userAllPlaylists } = data || {};
    // 로그인 여부에 따라 경로 설정
    if (user && url.pathname === '/spotify/login') {
        throw redirect(307, '/spotify');
    }
    //로그인되지 않았을 경우 로그인페이지로 이동.
    if (!user && url.pathname !== '/spotify/login') {
        throw redirect(307, '/spotify/login');
    }

    return {
        user,
        userAllPlaylists
    };
};