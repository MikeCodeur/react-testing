// Test en boite noir 
// http://localhost:3000/alone/final/03.js

import * as React from 'react'
import Hello from '../../components/helloreset'
import {render, screen, fireEvent} from '@testing-library/react'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  // ⛏️ supprime {container} car nous utiliserons `screen`
  const {container} = render(<Hello name="John" />)

  // 🐶 utilise `getByRole` pour recupérer un 'button'
  // 📑 https://testing-library.com/docs/queries/byrole/
  // 🤖 screen.getByRole('button')
  // Ici nous avons maintenant 2 buttons, pour pouvoir les distinguer il est possible 
  // ajouter un 2eme argument. nous allons utiliser 'name' pour savoir si 
  // l'on veut le bouton 'envoyer' ou 'reset'
  // 🤖 screen.getByRole('button', {name: /envoyer/i})
  const [envoyer, reset] = container.querySelectorAll('input')

  // 🐶 utilise `getByRole` pour recupérer le libellé, le role utilisé est 'status'
  const label = container.firstChild.querySelector('div')

  expect(label).toHaveTextContent(`Bonjour John`)
  fireEvent.click(envoyer)
  expect(label).toHaveTextContent(`Merci`)
  fireEvent.click(reset)
  expect(label).toHaveTextContent(`Bonjour John`)
})

