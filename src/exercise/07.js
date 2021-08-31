// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import GeoLoc from '../components/geoloc'
import HowToTests from '../components/howToTest'
const fileName = '07.js'

function App() {
  return (
    <div>
      <GeoLoc />
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
