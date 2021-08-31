// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import LoginSubmitStorage from '../components/loginSubmitNotification'
import HowToTests from '../components/howToTest'
const fileName = '02.js'

function App() {
  return (
    <div>
      <LoginSubmitStorage />
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
