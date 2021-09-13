import { writable } from 'svelte/store';

const lang = writable()
const theme = writable()
const currentPageTitle = writable()

export {
    lang,
    theme,
    currentPageTitle,
}
