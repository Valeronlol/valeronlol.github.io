<script>
    import { lang } from '$store/index.js'
    import languages from '$i18n/languages.js'
    import { storageLangName } from '$const'

    const changeLang = () => {
        const newLang = $lang === languages[0] ? languages[1] : languages[0]
        lang.set(newLang)
        localStorage.setItem(storageLangName, newLang)
    }
</script>
  
<div>
    <button on:click={changeLang}>
        toggle
    </button>
    <slot />
</div>