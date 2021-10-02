<script>
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'
    import { routes, isCurrentPath } from '$utils/router'

    const routeClickHandler = (event, target) => {
        if (isCurrentPath(target)) {
            event.preventDefault()
        }
    }
</script>
  
<WithTranslations let:_={_}>
    <nav>
        {#each routes as route}
            <a
                href={route.target}
                class:selected='{isCurrentPath(route.target)}'
                on:click={event => routeClickHandler(event, route.target)}
            >
                {_(route.title)}
            </a>
        {/each}
    </nav>
    <slot />
</WithTranslations>

<style>
    nav {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        flex-direction: column;
        align-items: flex-end;
        margin-right: -12px;
    }
    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
        color: #333333;
        padding: 6px 12px;
    }
    :global(#app.dark nav a) {
        transition: color .25s ease;
        color: #E0E0E0;
    }
    a.selected {
        color: #5154A9 !important;
        font-weight: 800;
    }
    a:hover {
        transition: background-color .15s ease, color .15s ease;
        background-color: #5154A9;
        border-radius: 15px;
        color: #F2F2F2;
    }
    a:not(:first-child) {
        margin-left: 10px;
    }
</style>