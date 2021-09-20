<script>
    import { lang } from '$store/index.js'
    import marked from 'marked'
    import DOMPurify from 'dompurify'
    import { mapLanguages } from '$i18n/languages.js'

    export let RU
    export let EN

    $: markdown = {
        [mapLanguages.ru]: RU,
        [mapLanguages.en]: EN,
    }[$lang]

    const sanitizeHtml = (rawHtml) => DOMPurify.sanitize(marked(rawHtml))
</script>

{#if $lang}
    {@html sanitizeHtml(markdown)}
    <slot />
{/if}
