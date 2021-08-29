// test basique avec ReactDOM
// http://localhost:3000/alone/final/01.js

import * as React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../../components/hello'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  const div = document.createElement('div')
  document.body.append(div)
  
  ReactDOM.render(<Hello name="John" />, div)

  const envoyer = div.querySelector('input')
  const label = div.firstChild.querySelector('div')

  expect(label.textContent).toBe(`Bonjour John`)
  envoyer.click()
  expect(label.textContent).toBe(`Merci`)
})


