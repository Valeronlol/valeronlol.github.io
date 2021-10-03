<script>
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'
    import { isCurrentPath } from '$utils/router'

    const mainPath = '/'

    const mainClickHandler = (event) => {
        if (isCurrentPath(mainPath)) {
            event.preventDefault()
        }
    }
</script>
  
<WithTranslations let:_={_}>
    <a
        href={mainPath}
        class='header-link'
        on:click={mainClickHandler}
    >
        {_('my_name')}
    </a>
    <slot />
</WithTranslations>

<style>
    .header-link {
        text-decoration: none;
        margin-left: -12px;
        color: #333;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        cursor: pointer;
        padding: 6px 12px;
        white-space: nowrap;
    }
    :global(#app.dark .header-link) {
        transition: color .25s ease;
        color: #E0E0E0;
    }
    .header-link:hover {
        transition: background-color .15s ease, color .15s ease;
        background-color: #5154A9;
        border-radius: 15px;
        color: #F2F2F2;
    }
</style>