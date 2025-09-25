<script>
    import { lang } from '$store/index.js'
    import { mapLanguages } from '$i18n/languages.js'

    export let RU = ''
    export let EN = ''

    $: markdown = {
        [mapLanguages.ru]: RU,
        [mapLanguages.en]: EN,
    }[$lang]

</script>

{#if $lang}
    {@html markdown}
    <slot />
{/if}
