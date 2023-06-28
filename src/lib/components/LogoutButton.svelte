<script>
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$components';
	import { element } from 'svelte/internal';
</script>

<!--    form을 submit혹은 fetch(브라우저에서 JS활성화 필요 없음)으로 endpoint를 호출-->
<!--    todo: form action공부하고 다시보기. 어디가 submit이고 어디가 fetch인건지 혼란스러움. (강의 154)-->
<!-- logout/+server.ts에서 header를 통해 endpoint구분-->
<form
	method="POST"
	action="/spotify/api/auth/logout"
	on:submit|preventDefault={async () => {
		const res = await fetch('/spotify/api/auth/logout', {
			method: 'POST',
			headers: {
				accept: 'application/json'
			}
		});
		if (res.ok) {
			invalidateAll();
		}
	}}
>
	<Button element="button" variant="solid">Logout</Button>
</form>
