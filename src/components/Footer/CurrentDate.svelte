<script>
  const siteCreationDate = 2021;
  const year = new Date().getFullYear();
  const startyear = year > siteCreationDate ? `${siteCreationDate} - ` : '';
</script>

<span>
  { startyear }
  { year }
  <slot />
</span>