// mocker les requêtes HTTP
// http://localhost:3000/alone/final/05.js

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import useCapitalize from '../../components/useCapitalize'
import userEvent from '@testing-library/user-event'

function UseCapitalizeHook({children}) {
  const {text, capitalize, uncapitalize} = useCapitalize(children)
  return (
    <div>
      <div>texte transformé: {text}</div>
      <button onClick={capitalize}>capitalize</button>
      <button onClick={uncapitalize}>uncapitalize</button>
    </div>
  )
}

test('rendu du hook useCapitalize est des fonctions capitalize/uncapitalize', () => {
  const texte = 'Ceci Est Un Test'
  render(<UseCapitalizeHook>{texte}</UseCapitalizeHook>)
  const capitalize = screen.getByRole('button', {name: 'capitalize'})
  const uncapitalize = screen.getByRole('button', {name: 'uncapitalize'})

  expect(screen.getByText(/texte transformé/i)).toHaveTextContent(texte)
  userEvent.click(capitalize)
  expect(screen.getByText(/texte transformé/i)).toHaveTextContent(
    texte.toUpperCase(),
  )
  userEvent.click(uncapitalize)
  expect(screen.getByText(/texte transformé/i)).toHaveTextContent(
    texte.toLowerCase(),
  )
})
