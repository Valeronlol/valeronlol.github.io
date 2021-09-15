<script>
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'
</script>
  
<WithTranslations let:_={_}>
    <nav>
        <a href="/">{_('main_page')}</a>
        <a href="/about">{_('about')}</a>
        <a href="/blog">{_('blog')}</a>
    </nav>
    <slot />
</WithTranslations>

<style>
    nav {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
    }
    a:not(:first-child) {
        margin-left: 10px;
    }
</style>