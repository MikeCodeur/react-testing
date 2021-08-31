// test avec Context
// 🚀 test-utils

import * as React from 'react'
import {render, screen} from '../../test/test-utils'
import Welcome from '../../components/welcome'

test('rendu du composent Welcome avec la langue fr', () => {
  render(<Welcome>John</Welcome>)
  expect(screen.queryByText(/Bonjour et bienvenue/i)).toBeInTheDocument()
})

test('rendu du composent Welcome avec la langue en', () => {
  render(<Welcome>John</Welcome>, {lang: 'en'})
  expect(screen.queryByText(/Hello and welcome/i)).toBeInTheDocument()
})
