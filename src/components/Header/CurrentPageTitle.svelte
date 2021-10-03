<script>
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'
    import { getCurrentRoute } from '$utils/router'

    const getTitle = () => {
        const currentRoute = getCurrentRoute(window.location.pathname)
        return currentRoute ? currentRoute.title : 'my_name'
    }
</script>
  
<WithTranslations let:_={_}>
    <h2 class='title'>
        {_(getTitle())}
    </h2>
    <slot />
</WithTranslations>

<style>
    .title {
        color: #E0E0E0;
        font-weight: bold;
        font-size: 82px;
        line-height: 100px;
        align-self: flex-end;
        margin-left: 53px;
        margin-bottom: 6px;
        transition: color .25s ease;
    }
    :global(#app.dark .header-bottom-container-left .title) {
        color: #4F4F4F;
    }
</style>