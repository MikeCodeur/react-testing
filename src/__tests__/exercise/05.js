// mocker les requêtes HTTP
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'
import LoginSubmit from '../../components/loginSubmit'
// 🐶 importe 'waitFor' de testing-library/react
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
// 🐶 importe 'rest' de 'msw'
// 🐶 importe 'setupServer' de 'msw/node'

const sleep = t => new Promise(resolve => setTimeout(resolve, t))

// 🐶 Met en place un 'server' mock de test avec 'setupServer'
// setupServer prend en parametre une requete à mocker
// 📑 https://mswjs.io/docs/api/setup-server
// Nous voulons intercepter les requetes sur "https://example.com/api/login"
// Si 'username' ou 'password' non présent dans le body on retournera un message d'erreur
// et un code errror 400
// on simulera un delay de 100ms avec (🤖 ctx.delay(100) )
// 🤖 return res(ctx.status(400), ctx.json({errorMessage: 'le password est obligatoire'}))

// 🐶 avant tous les tests appelle `server.listen()`
// 🐶 après tous les tests appelle `server.close()`

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

  // 🐶 simule une attente d'api superieur à 100ms gràce à 'waitFor'
  // utilise sleep pour simuler une attente `sleep(150)`

  // await waitFor(() => sleep(150))
  // expect(screen.getByText(username)).toBeInTheDocument()
})
