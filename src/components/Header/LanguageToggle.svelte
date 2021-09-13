<script>
    import { lang, theme } from '$store/index.js'
    import languages from '$i18n/languages.js'
    import { storageLangName, themes, storageThemeName, app } from '$const'

    const changeLang = () => {
        const newLang = $lang === languages[0] ? languages[1] : languages[0]
        lang.set(newLang)
        localStorage.setItem(storageLangName, newLang)
    }

    const toggleDarkTheme = () => {
        if ($theme === themes.DARK) {
            theme.set(null)
            localStorage.removeItem(storageThemeName)
        } else {
            theme.set(themes.DARK)
            localStorage.setItem(storageThemeName, themes.DARK)
        }
        document.getElementById(app).classList.toggle(themes.DARK)
    }
</script>

<button on:click={changeLang}>
    toggle
</button>
<button on:click={toggleDarkTheme}>Toggle mode</button>
<slot />
