import i18n from "i18n-js"
import * as RNLocalize from "react-native-localize"

import AppLanguage from "@languages/translations/type"

import * as languages from "./translations"

i18n.fallbacks = true
i18n.translations = languages

const fallback = { languageTag: "en", isRTL: false }
const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback
i18n.locale = languageTag

export default i18n.translations[languageTag] as AppLanguage