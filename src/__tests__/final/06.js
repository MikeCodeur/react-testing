// mocker les requêtes HTTP
// http://localhost:3000/alone/final/05.js

import * as React from 'react'
import LoginSubmitNotification from '../../components/loginSubmitNotification'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import mockHandlers from '../../test/mock-handlers'
import {setupServer} from 'msw/node'

const server = setupServer(...mockHandlers)

beforeAll(() => {
  server.listen()
  window.Notification = {
    requestPermission: jest.fn(),
  }
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('affiche un message de permission `granted` de notification" ', async () => {

  const fakePermission = 'granted'

  window.Notification.requestPermission.mockImplementation(() => {
    return fakePermission
  })

  render(<LoginSubmitNotification />)
  const username = faker.internet.userName()
  const password = faker.internet.password()

  const usernameElement = screen.getByText(/Nom d'utilisateur :/i)
  const passwordElement = screen.getByText(/Mot de passe :/i)
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitbuttonElement)

  await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i))

  expect(
    screen.getByText(/Les notifications sont autorisés/i),
  ).toBeInTheDocument()
})

test('affiche un message de permission `denied` de notification" ', async () => {
  const fakePermission = 'denied'

  window.Notification.requestPermission.mockImplementation(() => {
    return fakePermission
  })
  render(<LoginSubmitNotification />)
  const username = faker.internet.userName()
  const password = faker.internet.password()

  const usernameElement = screen.getByText(/Nom d'utilisateur :/i)
  const passwordElement = screen.getByText(/Mot de passe :/i)
  const submitbuttonElement = screen.getByRole('button', {name: /Connexion/i})

  userEvent.type(usernameElement, username)
  userEvent.type(passwordElement, password)
  userEvent.click(submitbuttonElement)

  await waitForElementToBeRemoved(() => screen.getByText(/chargement.../i))

  expect(
    screen.getByText(/veuillez autoriser les notifications/i),
  ).toBeInTheDocument()
  
})
