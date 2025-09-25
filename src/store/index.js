import { writable } from 'svelte/store'
import { mapLanguages } from '$i18n/languages.js'

export const lang = writable(mapLanguages.en)

export const theme = writable()
