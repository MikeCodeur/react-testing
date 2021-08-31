// Mocker axios
// http://localhost:3000/alone/final/05.js

import * as React from 'react'
import LoginSubmit from '../../components/loginSubmitAxios'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import axios from 'axios'
jest.mock('axios')

test('login api affiche le nom de l\'utilisateur connecté avec Axios" ', async () => {
  const username = faker.internet.userName()
  const password = faker.internet.password()
  const resp = {username}
  axios.post.mockResolvedValue(resp)

  render(<LoginSubmit />)

  const usernameElement = screen.getByText(/Nom d'utilisateur :/i)
  const passwordElement = screen.getByText(/Mot de passe :/i)
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitbuttonElement)

  await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i))
  expect(screen.getByText(username)).toBeInTheDocument()
})
