<script>
    import { lang, theme } from '$store/index.js'
    import { mapLanguages } from '$i18n/languages.js'
    import { storageLangName, themes, storageThemeName, app } from '$const'
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'

    const { en, ru } = mapLanguages

    const changeLang = (newLang) => {
        lang.set(newLang)
        localStorage.setItem(storageLangName, newLang)
    }

    const toggleDarkTheme = () => {
        document.getElementById(app).classList.toggle(themes.DARK)
        if ($theme === themes.DARK) {
            theme.set(null)
            localStorage.removeItem(storageThemeName)
        } else {
            theme.set(themes.DARK)
            localStorage.setItem(storageThemeName, themes.DARK)
        }
    }
</script>

<WithTranslations let:_={_}>
    <div class='lang-toggle'>
        <div
            class='lang-animate {$lang}'
        />
        <span
            on:click={() => changeLang(ru)}
            class:selected='{$lang === ru}'
            class='lang-btn'
        >
            {_(ru)}
        </span>
        <span
            on:click={() => changeLang(en)}
            class:selected='{$lang === en}'
            class='lang-btn'
        >
            {_(en)}
        </span>
    </div>
    <!-- <button on:click={toggleDarkTheme}>Toggle theme</button> -->
</WithTranslations>

<style>
    .lang-toggle {
        margin-right: 52px;
        position: relative;
    }
    .lang-btn {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #828282;
        cursor: pointer;
        user-select: none;
    }
    .lang-btn.selected {
        color: #2A2833;
        cursor: auto;
        pointer-events: none;
    }
    .lang-animate {
        width: 46px;
        height: 26px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 2px solid #2A2833;
        border-radius: 8px;
        pointer-events: none;
        transition: left .15s ease;
        left: -28px;
    }
    .lang-animate.ru {
        border-right-color: transparent;
    }
    .lang-animate.en {
        border-left-color: transparent;
        left: 26px;
    }
</style>