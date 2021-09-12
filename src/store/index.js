import { writable } from 'svelte/store';

const lang = writable()
const theme = writable()

export {
    lang,
    theme,
}
