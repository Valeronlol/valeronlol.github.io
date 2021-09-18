<script>
    import { currentPageTitle } from '$store/index.js'
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
        <span class='title-decoration' />
    </h2>
    <slot />
</WithTranslations>

<style>
    .title {
        color: #BDBDBD;
        position: relative;
        font-weight: bold;
        font-size: 40px;
        line-height: 50px;
    }
    .title-decoration {
        display: block;
        position: absolute;
        left: 22px;
        height: 86px;
        min-width: 400px;
        top: 50%;
        transform: translateY(-50%);
        border: 6px solid #BDBDBD;
        box-sizing: border-box;
        border-radius: 30px 45px 45px 30px;
        border-left-color: transparent;
        pointer-events: none;
    }
</style>