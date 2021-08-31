// Test en boite noir
// http://localhost:3000/alone/final/03.js
/* eslint-disable no-unused-vars */

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {LangProvider} from '../../components/lang'
import Welcome from '../../components/welcome'

test('rendu du composent Welcome avec la langue fr', () => {
  // 🐶 décommente en dessous le test est constate le problème
  // render(<Welcome>John</Welcome>)
  // expect(screen.queryByText(/Bonjour et bienvenue/i)).toBeInTheDocument()
  // 🐶 créé un wrapper
})
