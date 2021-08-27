// STYLE CSS
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'
import Counter from '../components/counter'
import HowToTests from '../components/howToTest'
const fileName = '01.js'

// 🤖 Utilise className pour la taille et le style (backgroundColor) pour la couleur
// 🤖 chaque element doive avoir "container" className appliqué

// 🐶 ajoute un props className à chaque element avec le bon nonm
// 🤖 Les class names dispo: container, container--large, container--medium, container--small

// 🐶 Ajoute egalement un prop style sur chaque element pour changer le backgroundColor
// le text doit aussi etre en italique `fontStyle: 'italic'`

function App() {
  return (
    <div>
      <Counter />
      <hr style={{border:'0.5px solid'}} />
      <HowToTests solution={false} fileName={fileName}  />
    </div>
  )
}

export default App
