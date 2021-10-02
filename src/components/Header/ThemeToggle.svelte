<script>
    import { theme } from '$store/index.js'
    import { themes, storageThemeName, app } from '$const'

    $: isLightTheme = Boolean(!$theme && $theme !== themes.DARK)
    $: isDarkTheme = $theme === themes.DARK
    $: isThemeLoaded = Boolean($theme) || $theme === null

    const toggleClass = () => document.getElementById(app).classList.toggle(themes.DARK)

    const handleSunClick = () => {
        if (isDarkTheme) {
            theme.set(null)
            localStorage.removeItem(storageThemeName)
            toggleClass()
        }
    }

    const handleMoonClick = () => {
        if (isLightTheme) {
            theme.set(themes.DARK)
            localStorage.setItem(storageThemeName, themes.DARK)
            toggleClass()
        }
    }
</script>

<div class='theme-toggle'>
    <slot />
    {#if isThemeLoaded}
        <div
            class='icon moon'
            class:selected='{isDarkTheme}'
            on:click={handleMoonClick}
        />
        <div
            class='icon sun'
            class:selected='{isLightTheme}'
            on:click={handleSunClick}
        />
    {/if}
    <slot />
</div>

<style>
    .theme-toggle {
        width: 60px;
        height: 26px;  
        border: 2px solid #2A2833;
        border-radius: 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .icon {
        width: 16px;
        height: 16px;
        cursor: pointer;
        background-color: #BDBDBD;
    }
    :global(#app.dark .theme-toggle .icon) {
        transition: background-color .25s ease;
        background-color: #4F4F4F;
    }
    .icon.selected {
        background-color: #2A2833;
        cursor: default;
        pointer-events: none;
    }
    :global(#app.dark .theme-toggle .icon.selected) {
        transition: background-color .25s ease;
        background-color: #BDBDBD;
    }
    .sun {
        mask: url(/assets/icons/sun.svg) no-repeat center;
    }
    .moon {
        mask: url(/assets/icons/moon.svg) no-repeat center;
    }
</style>