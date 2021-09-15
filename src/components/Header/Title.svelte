<script>
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'
</script>
  
<WithTranslations let:_={_}>
    <h5 class='header-title'>
        {_('my_name')}
    </h5>
    <slot />
</WithTranslations>

<style>
    .header-title {
        color: #333;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }
</style>