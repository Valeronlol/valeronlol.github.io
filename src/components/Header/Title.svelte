<script>
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'
</script>
  
<WithTranslations let:_={_}>
    <span class='header-title'>
        {_('my_name')}
    </span>
    <slot />
</WithTranslations>

<style>
    .header-title {
        color: blue;
        font-size: 28px;
    }
</style>