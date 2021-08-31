import * as React from 'react'
import {render as renderReactTestingLib} from '@testing-library/react'
import {LangProvider} from '../components/lang'

function render(ui, {lang = 'fr', ...options} = {}) {
  const Wrapper = ({children}) => (
    <LangProvider initialLang={lang}>{children}</LangProvider>
  )
  return renderReactTestingLib(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
// surcharge de render
export {render}
