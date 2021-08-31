// eviter les detail d'implementation
// 🚀 dispatchEvent et MouseEven
// http://localhost:3000/alone/final/01.js

import * as React from 'react'
import Hello from '../../components/hello'
import {render, fireEvent} from '@testing-library/react'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  const {container} = render(<Hello name="John" />)
  const envoyer = container.querySelector('input')
  const label = container.firstChild.querySelector('div')

  expect(label).toHaveTextContent(`Bonjour John`)
  fireEvent.click(envoyer)
  expect(label).toHaveTextContent(`Merci`)
})
