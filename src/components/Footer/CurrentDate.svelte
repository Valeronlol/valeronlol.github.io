<script>
  import WithTranslations from '$comp/hoc/WithTranslations.svelte'

  const siteCreationDate = 2021;
  const year = new Date().getFullYear();
  const startyear = year > siteCreationDate ? `${siteCreationDate} - ` : '';
</script>

<WithTranslations let:_={_}>
  { startyear }
  { year }
  {_('my_name')}
  <slot />
</WithTranslations>