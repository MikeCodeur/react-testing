// Test en boite noir
// 🚀 userEvent
// http://localhost:3000/alone/final/01.js

import * as React from 'react'
import Hello from '../../components/helloreset'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  render(<Hello name="John" />)
  const envoyer = screen.getByRole('button', {name: /envoyer/i})
  const reset = screen.getByRole('button', {name: /reset/i})
  const label = screen.getByRole('status')

  expect(label).toHaveTextContent(`Bonjour John`)
  userEvent.click(envoyer)
  expect(label).toHaveTextContent(`Merci`)
  userEvent.click(reset)
  expect(label).toHaveTextContent(`Bonjour John`)
})
