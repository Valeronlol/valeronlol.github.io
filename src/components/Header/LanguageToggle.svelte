<script>
    import { lang } from '$store/index.js'
    import { mapLanguages } from '$i18n/languages.js'
    import { storageLangName } from '$const'
    import WithTranslations from '$comp/hoc/WithTranslations.svelte'

    const { en, ru } = mapLanguages

    const changeLang = (newLang) => {
        lang.set(newLang)
        localStorage.setItem(storageLangName, newLang)
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
    <slot />
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
        width: 36px;
        height: 26px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 2px solid #2A2833;
        pointer-events: none;
        transition: left .15s ease;
        left: -24px;
    }
    .lang-animate.ru {
        border-right-color: transparent;
        border-radius: 15px 10px 10px 15px;
    }
    .lang-animate.en {
        border-left-color: transparent;
        border-radius: 10px 15px 15px 10px;
        left: 26px;
    }
</style>