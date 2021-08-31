// mocker les requêtes HTTP
// 🚀 réutilisation des requêtes HTTP Mock

import * as React from 'react'
import LoginSubmit from '../../components/loginSubmit'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'

import mockHandlers from '../../test/mock-handlers'
import {setupServer} from 'msw/node'

const server = setupServer(...mockHandlers)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('login api affiche le nom de l\'utilisateur connecté" ', async () => {
  render(<LoginSubmit />)

  const username = faker.internet.userName()
  const password = faker.internet.password()

  const usernameElement = screen.getByText(/Nom d'utilisateur :/i)
  const passwordElement = screen.getByText(/Mot de passe :/i)
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitbuttonElement)

  await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i))
  expect(screen.getByText(username)).toBeInTheDocument()
})
