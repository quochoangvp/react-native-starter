import i18n from "i18n-js"
import * as RNLocalize from "react-native-localize"

import * as languages from "./translations"
import AppLanguage from "./translations/type"

i18n.fallbacks = true
i18n.translations = languages

const fallback = { languageTag: "en", isRTL: false }
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(languages)) || fallback

i18n.locale = languageTag

export default i18n.translations[languageTag] as AppLanguage

export function setLanguage(lang: keyof typeof languages) {
  i18n.locale = lang
}
