// Test en boite noir

import * as React from 'react'
import Hello from '../../components/helloreset'
import {render, screen, fireEvent} from '@testing-library/react'

test('Affiche "Bonjour John" et "Merci" lors d\'un click avec reset', () => {
  render(<Hello name="John" />)
  const envoyer = screen.getByRole('button', {name: /envoyer/i})
  const reset = screen.getByRole('button', {name: /reset/i})
  const label = screen.getByRole('status')

  expect(label).toHaveTextContent(`Bonjour John`)
  fireEvent.click(envoyer)
  expect(label).toHaveTextContent(`Merci`)
  fireEvent.click(reset)
  expect(label).toHaveTextContent(`Bonjour John`)
})
