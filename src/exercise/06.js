// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import LoginSubmitNotification from '../components/loginSubmitNotification'
import HowToTests from '../components/howToTest'
const fileName = '06.js'

function App() {
  return (
    <div>
      <LoginSubmitNotification />
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
