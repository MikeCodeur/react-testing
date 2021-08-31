// test de Hook personnalisé
// 🚀 @testing-library/react-hooks

import * as React from 'react'
import {renderHook, act} from '@testing-library/react-hooks'
import useCapitalize from '../../components/useCapitalize'

test('rendu du hook useCapitalize est des fonctions capitalize/uncapitalize', () => {
  const text = 'Ceci Est Un Test'
  const {result} = renderHook(useCapitalize, {initialProps: text})
  expect(result.current.text).toBe(text)
  act(() => result.current.capitalize())
  expect(result.current.text).toBe(text.toUpperCase())
  act(() => result.current.uncapitalize())
  expect(result.current.text).toBe(text.toLowerCase())
})
