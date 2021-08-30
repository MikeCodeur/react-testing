// Test en boite noir 
// 🚀 dispatchEvent et MouseEven
// http://localhost:3000/alone/final/02.js

import * as React from 'react'
import LoginForm from '../../components/loginForm'
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('formulaire de login avec username et password" ', () => {

  const handleSubmit = jest.fn()
  render(<LoginForm onSubmit={handleSubmit}/>)
  const username = 'root'
  const password = 'passwd'

  const usernameElement = screen.getByText(/Nom d'utilisateur :/i)
  const passwordElement = screen.getByText(/Mot de passe :/i)
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitbuttonElement)

  expect(handleSubmit).toHaveBeenCalled()
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})



