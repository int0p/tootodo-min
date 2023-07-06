//Spotify API를 통해 데이터를 가져와서 프론트로 보낸다.
//새롭게 릴리즈된 음악, 추천 재생 목록, 사용자의 재생목록, 임의의 카테코리와 그에 대한 재생목록 정보를 가져온다.
//각 데이터는 페이지 로드시 요구된다.
//spotify endpoint는 spotify/api/spotify/[...path]/+server.ts에서 생성된다.

import type { PageLoad } from './$types';
import { fetchRefresh } from '$helpers';
export const load: PageLoad = async ({ fetch: _fetch, parent }) => {
    const { user } = await parent(); //상위 컴포넌트로부터 user정보를 가져온다.

    //access token이 만료됐을 경우(401인증오류가 발생했을경우) refresh token을 통해 access token을 재발급받고 fatch한다.
    const fetch = (path: string) => fetchRefresh(_fetch, path);
    // Spotify API의 'new-releases, ...' 엔드포인트에 GET 요청을 보낸다. 결과는 최대 6개까지 가져온다.
    //// 비동기 함수인 fetch를 사용하지만, 반환값을 즉시 사용할 필요가 없으므로 await나 promise를 사용하지 않는다.
    const newReleases = fetch('/spotify/api/spotify/browse/new-releases?limit=6');
    const featuredPlaylists = fetch('/spotify/api/spotify/browse/featured-playlists?limit=6');
    const userPlaylists = fetch(`/spotify/api/spotify/users/${user?.id}/playlists?limit=6`);

    // Spotify API의 'categories' 엔드포인트에 GET 요청을 보내 스포티파이내에 저장된 카테고리 정보들을 불러온다.
    // 요청이 성공적으로 이루어지면, 결과를 JSON형식으로 변환하여 'catsResJSON'에 저장한다.
    //// await를 사용하면 promise가 실행될 때까지 실행을 중단하여 promise의 결과값을 직접적으로 얻을 수 있다.
    //// 카테고리정보를 받은 후, 카테고리 정보들 중에서 임의의 카테고리를 뽑아내야하므로 ( == 반환값을 즉시사용해야함) await를 사용한다.
    const catsRes = await fetch(`/spotify/api/spotify/browse/categories`);
    const catsResJSON: SpotifyApi.MultipleCategoriesResponse | undefined = catsRes.ok
        ? await catsRes.json()
        : undefined;
    // 카테고리 정보들 중에서 임의의 카테고리 3개를 뽑아낸다.
    // 순서 섞는 방법: sort(() => 0.5 - Math.random())
    const randomCats = catsResJSON
        ? catsResJSON.categories.items.sort(() => 0.5 - Math.random()).slice(0, 3)
        : [];
    // 선택한 카테코리에서 재생목록을 가져온다.
    const randomCatsPromises = randomCats.map((cat) =>
        fetch(`spotify/api/spotify/browse/categories/${cat.id}/playlists?limit=6`)
    );

    //앞서 만든 모든 요청들을 한번에 보낸다.
    //// promise객체를 직접 사용하면 여러 비동기 작업을 동시에 실행할 수 있다.
    //// Promise.all()은 여러개의 promise를 인자로 받아, 모든 promise가 완료될 때까지 기다린 후, 모든 promise의 결과값을 배열로 반환한다.
    //// 가능한 빨리 모든 작업을 완료하려는 경우에 유리하다.
    //// Promise.all()의 반환값은 load함수를 return할 때 사용되므로 await를 사용한다.
    const [newReleasesRes, featuredPlaylistsRes, userPlaylistsRes, ...randomCatsRes] =
        await Promise.all([newReleases, featuredPlaylists, userPlaylists, ...randomCatsPromises]);

    //각각의 요청이 성공적으로 이루어졌다면, 결과를 JSON형식으로 변환하여 반환한다.
    //as Promise<SpotifyApi.ListOfNewReleasesResponse>)를 통해 외부에서 어떤 해당 객체에 어떤 파라미터가 저장되어있는지 확인 할 수 있다.
    // await console.log(newReleasesRes);
    return {
        newReleases: newReleasesRes.ok
            ? (newReleasesRes.json() as Promise<SpotifyApi.ListOfNewReleasesResponse>)
            : undefined,
        featuredPlaylists: featuredPlaylistsRes.ok
            ? (featuredPlaylistsRes.json() as Promise<SpotifyApi.ListOfFeaturedPlaylistsResponse>)
            : undefined,
        userPlaylists: userPlaylistsRes.ok
            ? (userPlaylistsRes.json() as Promise<SpotifyApi.ListOfUsersPlaylistsResponse>)
            : undefined,
        homeCategories: randomCats,
        categoriesPlaylists: Promise.all(
            randomCatsRes.map((res) =>
                res.ok ? (res.json() as Promise<SpotifyApi.CategoryPlaylistsResponse>) : undefined
            )
        )
    };
};