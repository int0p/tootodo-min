//access token 혹은 refresh token이 만료됐을 경우의 에러 처리.
import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

// path에서 fetch를 통해 받아온 response를 리턴한다.
// 만일 401 인증 오류가 발생하면, 리프레션 토큰을 통해 새로운 access token을 받아온다.
// 그러나, refresh token역시 만료됐다면, 에러 페이지를 띄운다.
export default async function fetchRefresh(
    fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
    path: string
) {
    const req = fetch(path);

    // 서버사이드에서 코드가 실행되는 경우,
    // 서버 사이드에서는 보통 모든 사용자에 대해 동일한 페이지를 렌더링한다.
    // ->  개별 사용자에 대한 인증 상태를 확인하거나 처리할 필요가 없다.
    //  -> 서버에서는 사용자 인증을 처리하지 않는다.
    // 서버에서는 사용자 인증 없이 빠르게 페이지를 렌더링 할 수 있고, 브라우저에서는 인증 상태에 따라 적절한 사용자 경험을 제공할 수 있다.
    if (!browser) return req;
    const res = await req;

    //401상태코드를 확인하고, refresh요청을 전송한다.
    /* 해당 코드는 동시에 여러 요청이 401상태코드를 받은 경우, 여러 번의 refresh요청이 동시에 보내질 수 있다.
    if(res.status===401){
        await fetch('spotify/api/auth/refresh');
        return fetch(path);
    }else {
        return res;
    }
    */
    // window.refreshPromise를 통해 동서에 여러 요청이 401상태코드를 받더라도 refresh요청은 한 번만 보내지도록 한다.
    // refreshPromise의 타입은 app.d.ts의 Window 인터페이스에서 정의했다.
    if (res.status === 401) {
        if (!window.refreshPromise) {
            window.refreshPromise = fetch('spotify/api/auth/refresh').finally(() => {
                window.refreshPromise = null;
            });
        }
        const refreshRes = await window.refreshPromise;
        //refresh token역시 invalid일 경우 에러페이지를 반환한다. -> 다시 새로고침하면 로그인 페이지로.
        if (!refreshRes.ok) throw error(401, 'Session Expired!');
        return fetch(path);
    } else {
        return res;
    }
}