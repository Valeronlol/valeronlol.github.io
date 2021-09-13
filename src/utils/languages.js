import supportLanguages from '$i18n/languages'

const getBrowserLanguage = () => {
    const browserLanguage = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage
    
    if (browserLanguage && supportLanguages.includes(browserLanguage)) {
        if (browserLanguage.length > 2) {
            return browserLanguage.substring(0, 2)
        }
        return browserLanguage
    }

    return supportLanguages[0]
}

export {
    getBrowserLanguage,
}