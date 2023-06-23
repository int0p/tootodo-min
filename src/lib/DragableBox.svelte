<!--https://svelte.dev/repl/25a1141c007b4d2097367b12a559f63a?version=4.0.0-->
<script>
    function dragMe(node) {
        let moving = false;
        let right = 30;
        let bottom = 30;

        node.style.position = 'absolute';
        node.style.bottom = `${bottom}px`;
        node.style.right = `${right}px`;
        node.style.cursor = 'move';
        node.style.userSelect = 'none';

        node.addEventListener('mousedown', () => {
            moving = true;
        });

        window.addEventListener('mousemove', (e) => {
            if (moving) {
                right -= e.movementX;
                bottom -= e.movementY;
                node.style.bottom = `${bottom}px`;
                node.style.right = `${right}px`;
            }
        });

        window.addEventListener('mouseup', () => {
            moving = false;
        });

    }
</script>

<div use:dragMe class="dragBox" >
    <slot/>
</div>

<style>
    .dragBox {
        z-index: 100;
        user-select: none;
        cursor: move;
        position: absolute;
        right:0;
        bottom:0;
        width: 300px;
        height: 360px;
    //TODO: 화면 넓이에 따라 다른 w,h 설정
    }
</style>