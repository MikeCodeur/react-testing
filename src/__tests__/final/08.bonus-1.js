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

test('rendu du composent Welcome avec la langue en', () => {
  const Wrapper = ({children}) => (
    <LangProvider initialLang="en">{children}</LangProvider>
  )
  render(<Welcome>John</Welcome>, {wrapper: Wrapper})
  expect(screen.queryByText(/Hello and welcome/i)).toBeInTheDocument()
})

test('rendu du composent Welcome avec la langue fr', () => {
  const Wrapper = ({children}) => (
    <LangProvider initialLang="fr">{children}</LangProvider>
  )
  render(<Welcome bye={true}>John</Welcome>, {wrapper: Wrapper})
  expect(screen.queryByText(/aurevoir !/i)).toBeInTheDocument()
})

test('rendu du composent Welcome avec la langue en', () => {
  const Wrapper = ({children}) => (
    <LangProvider initialLang="en">{children}</LangProvider>
  )
  render(<Welcome bye={true}>John</Welcome>, {wrapper: Wrapper})
  expect(screen.queryByText(/Good bye !/i)).toBeInTheDocument()
})
