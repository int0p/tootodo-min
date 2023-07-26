<script>
    let currentVariant = '!bg-transparent';
</script>

<div class="w-full h-full overflow-y-scroll text-token grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-0.5 pr-2">
    {#each Array(13) as _, i}
    <a class="card {currentVariant} card-hover border-black dark:border-white border" href="/elements/cards">
        <header>
            <img src={'' +
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
             +
             ''} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
        </header>
        <div class="p-4 space-y-4">
<!--            <h6 class="h6">Announcements</h6>-->
            <h3 class="h3" data-toc-ignore>Project {i}</h3>
            <article>
                <p>
                    <!-- cspell:disable -->
                    Lorem ipsum dolor sit amet c
                </p>
            </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4
        border-t border-black border-dashed dark:border-white
">
            <div class="flex-auto flex justify-between items-center">
                <h6 class="font-bold">By Alex</h6>
                <small>On {new Date().toLocaleDateString()}</small>
            </div>
        </footer>
    </a>
    {/each}
</div>