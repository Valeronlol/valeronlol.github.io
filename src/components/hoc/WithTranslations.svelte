<script>
    import { onMount } from 'svelte'
    import get from 'lodash.get'
    import { lang } from '$store/index.js'
    import ru from '$i18n/translations/ru.json'
    import en from '$i18n/translations/en.json'
    import { storageLangName } from '$const'

    const translations = {
        ru,
        en,
    }

    onMount(async () => {
        const savedLang = localStorage.getItem(storageLangName)
        if (savedLang && savedLang !== $lang) {
            lang.set(savedLang)
        }
	})

    let tanslation
    $: tanslation = translations[$lang]
    $: translater = path => get(tanslation, path)
</script>

{#if tanslation}
    <slot _={translater} />
{/if}