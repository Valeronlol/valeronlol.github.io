const languages = [
    'en',
    'ru',
]

const mapLanguages = languages.reduce((acc, lang) => {
    acc[lang] = lang
    return acc
}, {})

export {
    mapLanguages,
    languages,
}

export default languages
