<script>
    import { currentPageTitle } from '$store/index.js'
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'
</script>
  
<WithTranslations let:_={_}>
    <span class='title'>
        {_('my_name')}
    </span>
    <slot />
</WithTranslations>

<style>
    .title {
        color: #BDBDBD;
        font-size: 28px;
    }
</style>