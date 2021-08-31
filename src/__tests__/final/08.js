// test avec Context

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {LangProvider} from '../../components/lang'
import Welcome from '../../components/welcome'

test('rendu du composent Welcome avec la langue fr', () => {
  const Wrapper = ({children}) => (
    <LangProvider initialLang="fr">{children}</LangProvider>
  )
  render(<Welcome>John</Welcome>, {wrapper: Wrapper})
  expect(screen.queryByText(/Bonjour et bienvenue/i)).toBeInTheDocument()
})
