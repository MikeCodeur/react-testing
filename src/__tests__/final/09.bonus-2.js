// test de Hook personnalisé
// 🚀 setup function

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCapitalize from '../../components/useCapitalize'

function setup({initialProps} = {}) {
  const result = {}
  function Component(props) {
    result.current = useCapitalize(props.text)
    return null
  }
  render(<Component {...initialProps} />)
  return result
}

test('rendu du hook useCapitalize est des fonctions capitalize/uncapitalize', () => {
  const text = 'Ceci Est Un Test'
  const result = setup({initialProps: {text}})
  expect(result.current.text).toBe(text)
  act(() => result.current.capitalize())
  expect(result.current.text).toBe(text.toUpperCase())
  act(() => result.current.uncapitalize())
  expect(result.current.text).toBe(text.toLowerCase())
})
