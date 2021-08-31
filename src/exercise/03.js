// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import HelloReset from '../components/helloreset'
import HowToTests from '../components/howToTest'
const fileName = '02.js'

function App() {
  return (
    <div>
      <HelloReset name="John" />
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
