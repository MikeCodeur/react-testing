// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import useCapitalize from '../components/useCapitalize'
import HowToTests from '../components/howToTest'
const fileName = '09.js'

function UseCapitalizeHook({children}) {
  const {text, capitalize, uncapitalize} = useCapitalize(children)
  return (
    <div>
      <div>texte transformé: {text}</div>
      <button onClick={capitalize}>capitalize</button>
      <button onClick={uncapitalize}>uncapitalize</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <UseCapitalizeHook>Hello World</UseCapitalizeHook>
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
