<script>
    import { onMount } from 'svelte'
    import { lang } from '$store/index.js'
    import ru from '$i18n/translations/ru.json'
    import en from '$i18n/translations/en.json'
    import { storageLangName } from '$const'
    import { getBrowserLanguage } from '$utils/languages'
    import { mapLanguages } from '$i18n/languages.js'

    const translations = {
        ru,
        en,
    }

    let isLangLoaded = false

    onMount(() => {
        const savedLang = localStorage.getItem(storageLangName)
        if (savedLang) {
            lang.set(savedLang)
        } else {
            const browserLanguage = getBrowserLanguage()
            lang.set(browserLanguage)
            localStorage.setItem(storageLangName, browserLanguage)
        }
        isLangLoaded = true
	})

    $: translater = path => translations?.[$lang]?.[path] ?? mapLanguages.en
</script>

{#if isLangLoaded}
    <slot _={translater} />
{/if}
