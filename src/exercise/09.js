// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import LoginSubmitStorage from '../components/loginSubmitNotification'
import HowToTests from '../components/howToTest'
import {useLang,LangProvider} from '../components/lang'
import Welcome from '../components/welcome'
const fileName = '02.js'

function App() {

  return (
    <div>
      <LangProvider initialLang="en">
         <Welcome bye={true}>John</Welcome>
         <LangChanger />
      </LangProvider>
     
      <hr/>
      <HowToTests solution={false} fileName={fileName}  />
    </div>
  )
}


function LangChanger() {
  const [lang, setLang] = useLang()
  return (
    <button onClick={() => setLang(t => (t === 'fr' ? 'en' : 'fr'))}>
      changer la langue: {lang}
    </button>
  )
}

export default App
