// Hello
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import '../styles.css'
import LoginForm from '../components/loginForm'
import HowToTests from '../components/howToTest'
const fileName = '03.js'

function App() {
  const handleSubmit = ({username, password}) => {
    console.log(`submit avec ${username}, ${password}`)
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      <hr />
      <HowToTests solution={false} fileName={fileName} />
    </div>
  )
}

export default App
