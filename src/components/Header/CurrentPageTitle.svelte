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
        white-space: nowrap;
    }
    :global(#app.dark .header-bottom .title) {
        color: #4F4F4F;
    }

    @media screen and (max-width: 1024px) {
        .title {
            margin-left: 33px;
            font-size: 60px;
        }
    }

    @media screen and (max-width: 760px) {
        .title {
            margin-left: 20px;
            font-size: 40px;
        }
    }

    @media screen and (max-width: 680px) {
        .title {
            margin: 0;
            position: absolute;
            top: 100%;
            right: 0;
            font-size: 40px;
            color: #fff;
            text-shadow: 2px 0 0 #E0E0E0, -2px 0 0 #E0E0E0, 0 2px 0 #E0E0E0, 0 -2px 0 #E0E0E0, 1px 1px #E0E0E0, -1px -1px 0 #E0E0E0, 1px -1px 0 #E0E0E0, -1px 1px 0 #E0E0E0;
        }

        :global(#app.dark .header-bottom .title) {
            text-shadow: 2px 0 0 #4F4F4F, -2px 0 0 #4F4F4F, 0 2px 0 #4F4F4F, 0 -2px 0 #4F4F4F, 1px 1px #4F4F4F, -1px -1px 0 #4F4F4F, 1px -1px 0 #4F4F4F, -1px 1px 0 #4F4F4F;
            color: #101115;
        }
    }
</style>
