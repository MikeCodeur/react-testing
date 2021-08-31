// mocker l'API du navigateur
// http://localhost:3000/alone/exercise/06.js

/* eslint-disable no-unused-vars */
import * as React from 'react'
import LoginSubmitNotification from '../../components/loginSubmitNotification'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import mockHandlers from '../../test/mock-handlers'
import {setupServer} from 'msw/node'

const server = setupServer(...mockHandlers)

beforeAll(() => {
  server.listen()
  // 🐶 met à jour la valeur de 'window.Notification' avec un objet 'requestPermission' qui veut jest.fn()
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('affiche un message de permission `granted` de notification" ', async () => {
  // 🐶 créé un variable 'fakePermission' qui vaut 'granted'
  // 🐶 appelle mockImplementation sur 'window.Notification.requestPermission' et passe en paramètre une fonction qui return fakePermission
  // 🤖 () => {return fakePermission}
  // 🐶 appelle render de <LoginSubmitNotification />
  // 🐶 créé deux variables 'username' et 'password' avec des fakes donnée en utilisant faker
  // 🐶 récupère 'usernameElement' 'passwordElement' 'submitbuttonElement' avec getByText getByRole comme précedement
  // 🐶 ajoute 'username' 'usernameElement' / 'password' dans 'passwordElement'
  // 🐶 simule un clik sur sur 'submitbuttonElement'
  // 🐶 utlise waitForElementToBeRemoved pour attendre la fin d'affichage du texte 'chargement...'
  // 🐶 verifie que le texte "Les notifications sont autorisés" se trouve dans le document
})

test('affiche un message de permission `denied` de notification" ', async () => {
  // 🐶 même test que précédement sauf que fakePermission = 'denied'
  // 🐶 verifie que le texte "veuillez autoriser les notifications" se trouve dans le document
})
