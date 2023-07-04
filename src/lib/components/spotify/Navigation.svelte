<script lang="ts">
    import { Home, Search, ListMusic, Menu, X, type Icon } from 'lucide-svelte';
    import {tick, type ComponentType } from 'svelte';
    import { IconButton } from '$components';
    import logo from '$assets/Spotify_Logo_RGB_White.png';
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';
    import {beforeNavigate} from "$app/navigation";

    export let desktop: boolean;

    let isMobileMenuOpen = false;
    $: isOpen = desktop || isMobileMenuOpen;
    let openMenuButton: IconButton;
    let closeMenuButton: IconButton;
    let lastFocusableElement: HTMLAnchorElement;
    const menuItems: { path: string; label: string; icon: ComponentType<Icon> }[] = [
        {
            path: '/spotify',
            label: 'Home',
            icon: Home
        },
        {
            path: '/spotify/search',
            label: 'Search',
            icon: Search
        },
        {
            path: '/spotify/playlists',
            label: 'Playlists',
            icon: ListMusic
        }
    ];

    const openMenu = async () => {
        isMobileMenuOpen = true;
        await tick();
        closeMenuButton.getButton().focus();
    };
    const closeMenu = async () => {
        isMobileMenuOpen = false;
        await tick();
        openMenuButton.getButton().focus();
    };
    //focus trap (mobile에서, menu버튼을 눌렀을 때, tap키를 누를 수 있는 범위 제한(only 메뉴바 내부))
        //제일 위(close button)에서 shift tab눌렀을 경우 제일 밑으로 focus이동
    const moveFocusToBottom = (e: KeyboardEvent) => {
        if (desktop) return;
        if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            lastFocusableElement.focus();
        }
    };
        //마지막 menu아이템에 focus가 있는 상태에서 tap을 누르면, 제일 위에 있는 버튼으로 focus이동
    const moveFocusToTop = (e: KeyboardEvent) => {
        if (desktop) return;
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            closeMenuButton.getButton().focus();
        }
    };
    //esc버튼을 누르면 메뉴가 닫힌다.
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    };
    //페이지 전환하기 전에 메뉴를 닫는다.
    beforeNavigate(() => {
        isMobileMenuOpen = false;
    });
</script>

<svelte:head>
    {#if !desktop && isMobileMenuOpen}
        <style>
            body {
                overflow: hidden;
            }
        </style>
    {/if}
</svelte:head>

<div class="nav-content" class:desktop class:mobile={!desktop} >
<!--    모바일에서 menu를 열면, 뒷 버튼 눌리지 않게 overlay-->
    {#if !desktop && isMobileMenuOpen}
        <div class="overlay" on:click={closeMenu} transition:fade={{ duration: 200 }}
             on:keyup={handleEscape}
        />
<!--        todo on:keyup={handleEscape} 왜 필요함? 얘 없어도 esc잘됨.-->
    {/if}
<!--    모바일일 때 menu를 열면, 좌측에서부터 메뉴가 스윽 등장. 데스크탑일땐 menu가 디폴트로 존재. -->
    <nav aria-label="Main">
        {#if !desktop}
            <IconButton icon={Menu} label="Open menu"
                        on:click={openMenu}
                        bind:this={openMenuButton}
                        aria-expanded={isOpen}/>
        {/if}
        <div class="nav-content-inner" class:is-hidden={!isOpen}
             style:visibility={isOpen ? 'visible' : 'hidden'}
             on:keyup={handleEscape}
        >
            {#if !desktop}
                <IconButton
                        icon={X}
                        label="Close Menu"
                        bind:this={closeMenuButton}
                        on:click={closeMenu}
                        on:keydown={moveFocusToBottom}
                        class="close-menu-button"
                />
            {/if}
            <img src={logo} class="logo" alt="Spotify" />
            <ul>
                {#each menuItems as item, index}
                    {@const iconProps = {
                        focusable: 'false',
                        'aria-hidden': true,
                        color: 'var(--text-color)',
                        size: 26,
                        strokeWidth: 2
                    }}
                    <li class:active={item.path === $page.url.pathname}>
                        {#if menuItems.length === index + 1}
                            <a bind:this={lastFocusableElement} href={item.path} on:keydown={moveFocusToTop}>
                                <svelte:component this={item.icon} {...iconProps} />
                                {item.label}
                            </a>
                        {:else}
                            <a href={item.path}>
                                <svelte:component this={item.icon} {...iconProps} />
                                {item.label}
                            </a>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
</div>

<style lang="scss">
  .nav-content {
    .overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--sidebar-color);
      opacity: 0.75;
      z-index: 100;
      @include breakpoint.up('md') {
        display: none;
      }
    }
    .logo {
      max-width: 100%;
      width: 130px;
    }
    .nav-content-inner {
      padding: 20px;
      min-width: var(--sidebar-width);
      background-color: var(--sidebar-color);
      height: calc(100vh - 4rem);
      overflow: auto;
      display: none;
      ul {
        padding: 0;
        margin: 20px 0 0;
        list-style: none;
        li {
          &.active {
            a {
              opacity: 1;
            }
          }
          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: var(--text-color);
            font-size: functions.toRem(14);
            font-weight: 500;
            padding: 5px;
            margin: 10px 0;
            opacity: 0.7;
            transition: opacity 0.2s;
            &:hover,
            &:focus {
              opacity: 1;
            }
            :global(svg) {
              margin-right: 12px;
            }
          }
        }
      }
    }
    &.desktop {
      position: sticky;
      top: 0;
      .nav-content-inner {
        @include breakpoint.up('md') {
          display: block;
        }
      }
    }
    &.mobile .nav-content-inner {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      transition: transform 200ms, opacity 200ms;
      &.is-hidden {
        transition: transform 200ms, opacity 200ms, visibility 200ms;
        transform: translateX(-100%);
        opacity: 0;
      }
      @include breakpoint.down('md') {
        display: block;
      }
    }
    :global(.menu-button) {
      @include breakpoint.up('md') {
        display: none;
      }
    }
    :global(.close-menu-button) {
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
</style>