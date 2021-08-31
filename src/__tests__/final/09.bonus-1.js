// test de Hook personnalisé
// 🚀 Faux composant

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCapitalize from '../../components/useCapitalize'

test('rendu du hook useCapitalize est des fonctions capitalize/uncapitalize', () => {
  const texte = 'Ceci Est Un Test'
  let result
  function Component() {
    result = useCapitalize(texte)
    return null
  }
  render(<Component />)
  expect(result.text).toBe(texte)
  act(() => result.capitalize())
  expect(result.text).toBe(texte.toUpperCase())
  act(() => result.uncapitalize())
  expect(result.text).toBe(texte.toLowerCase())
})
