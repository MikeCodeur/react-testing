// test avec Context
// 🚀 renderWithProviders

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {LangProvider} from '../../components/lang'
import Welcome from '../../components/welcome'

function renderWithProviders(ui, {lang = 'fr', ...options} = {}) {
  const Wrapper = ({children}) => (
    <LangProvider value={[lang, () => {}]}>{children}</LangProvider>
  )
  return render(ui, {wrapper: Wrapper, ...options})
}

test('rendu du composent Welcome avec la langue fr', () => {
  renderWithProviders(<Welcome>John</Welcome>)
  expect(screen.queryByText(/Bonjour et bienvenue/i)).toBeInTheDocument()
})

test('rendu du composent Welcome avec la langue en', () => {
  renderWithProviders(<Welcome>John</Welcome>, {lang: 'en'})
  expect(screen.queryByText(/Hello and welcome/i)).toBeInTheDocument()
})
