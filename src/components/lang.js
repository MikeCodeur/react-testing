import * as React from 'react'

const LangContext = React.createContext()

function useLang() {
  const context = React.useContext(LangContext)
  if (!context) {
    throw new Error('useLang doit etre utilisé dans un LangProvider ')
  }
  return context
}

function LangProvider({initialLang = 'fr', ...props}) {
  const [lang, setLang] = React.useState(initialLang)
  return <LangContext.Provider value={[lang, setLang]} {...props} />
}

export {useLang, LangProvider}
