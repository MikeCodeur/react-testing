// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import LoginSubmitStorage from '../components/loginSubmitNotification'
import HowToTests from '../components/howToTest'
import {LangProvider} from '../components/lang'
import Welcome from '../components/welcome'
const fileName = '02.js'

function App() {

  return (
    <div>
      <LangProvider initialLang="fr">
         <Welcome bye={true}>John</Welcome>
      </LangProvider>
      <hr/>
      <HowToTests solution={false} fileName={fileName}  />
    </div>
  )
}

export default App
