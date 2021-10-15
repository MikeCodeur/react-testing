import * as React from 'react'
import {useLang} from '../components/lang'

const messages = {
  fr: {
    welcome: 'Bonjour et bienvenue',
    bye: 'aurevoir !',
  },
  en: {
    welcome: 'Hello and welcome',
    bye: 'Good bye !',
  },
}

function Welcome({children, bye = false}) {
  const [lang] = useLang()
  return (
    <div>
      {bye ? (
        <div>
          {messages[lang].bye} {children}
        </div>
      ) : (
        <div>
          {messages[lang].welcome} {children}
        </div>
      )}
    </div>
  )
}

export default Welcome
