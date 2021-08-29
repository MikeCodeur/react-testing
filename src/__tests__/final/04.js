// Test en boite noir 
// http://localhost:3000/alone/final/02.js

import * as React from 'react'
import LoginForm from '../../components/loginForm'
import {render,screen, fireEvent} from '@testing-library/react'

test('formulaire de login avec username et password" ', () => {
  let submittedUsername
  let submittedPassword
  const handleSubmit = (formData) => {
   submittedUsername = formData.username
   submittedPassword = formData.password
  }
  render(<LoginForm onSubmit={handleSubmit}/>)
  
  const username = 'root'
  const password = 'passwd'

  const usernameElement = screen.getByRole('textbox',{ name: /Nom d'utilisateur :/i})
  const passwordElement = screen.getByRole('textbox', { name:/Mot de passe :/i})
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  fireEvent.change(usernameElement, {target: { value: username }});
  fireEvent.change(passwordElement, {target: { value: password }})
  fireEvent.click(submitbuttonElement)

  expect(submittedUsername).toBe(username)
  expect(submittedPassword).toBe(password)
  
})



