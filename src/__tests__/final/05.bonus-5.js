// mocker les requêtes HTTP
// 🚀 réinitialiser les servers handlers

import * as React from 'react'
import LoginSubmit from '../../components/loginSubmit'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from '@faker-js/faker'

import mockHandlers from '../../test/mock-handlers'
import {setupServer} from 'msw/node'
import {rest} from 'msw'

const server = setupServer(...mockHandlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

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

test('login api en erreur pour manque de username" ', async () => {
  render(<LoginSubmit />)

  const username = faker.internet.userName()
  const usernameElement = screen.getByText(/Nom d'utilisateur :/i)
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  userEvent.type(usernameElement, username)
  userEvent.click(submitbuttonElement)

  await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i))
  expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(
    `"le password est obligatoire"`,
  )
})

test("test d'une erreur 503", async () => {
  server.use(
    rest.post('https://example.com/api/login', async (req, res, ctx) => {
      return res(
        ctx.status(503),
        ctx.json({errorMessage: 'service non disponible'}),
      )
    }),
  )
  render(<LoginSubmit />)

  const username = faker.internet.userName()
  const usernameElement = screen.getByText(/Nom d'utilisateur :/i)
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  userEvent.type(usernameElement, username)
  userEvent.click(submitbuttonElement)

  await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i))
  expect(screen.getByRole('alert').textContent).toMatchInlineSnapshot(
    `"service non disponible"`,
  )
})
