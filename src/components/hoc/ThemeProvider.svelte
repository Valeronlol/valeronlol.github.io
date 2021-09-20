<script>
    import { onMount } from 'svelte'
    import { storageThemeName } from '$const'
    import { theme } from '$store/index.js'

    onMount(() => {
        const storageTheme = localStorage.getItem(storageThemeName)
        if (storageTheme) {
            theme.set(storageTheme)
            document.getElementById('app').classList.add(storageTheme)
        }
	})
</script>

<slot />