// mocker les requêtes HTTP
// 🚀 waitForElementToBeRemoved

import * as React from 'react'
import LoginSubmit from '../../components/loginSubmit'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from '@faker-js/faker'

import {rest} from 'msw'
import {setupServer} from 'msw/node'

const sleep = t => new Promise(resolve => setTimeout(resolve, t))
const delay = 100

const server = setupServer(
  rest.post('https://example.com/api/login', async (req, res, ctx) => {
    if (!req.body.password) {
      return res(
        ctx.status(400),
        ctx.json({errorMessage: 'le password est obligatoire'}),
        ctx.delay(delay),
      )
    }
    if (!req.body.username) {
      return res(
        ctx.status(400),
        ctx.json({errorMessage: 'le username est obligatoire'}),
        ctx.delay(delay),
      )
    }
    return res(ctx.delay(delay), ctx.json({username: req.body.username}))
  }),
)

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
