// Test de formulaires
// http://localhost:3000/alone/exercise/04.js

/* eslint-disable no-unused-vars */
import * as React from 'react'
import LoginForm from '../../components/loginForm'
import {render, screen, fireEvent} from '@testing-library/react'

test('formulaire de login avec username et password" ', () => {
  // 🐶 créé 2 variables : 'submittedUsername' et 'submittedPassword' qui seront mises à jour par une fonction 'handleSubmit'
  // 🐶 créé une fonction 'handleSubmit' avec un paramètre (object qui contient 'username' et 'password')
  // met à jour 'submittedUsername' et 'submittedPassword
  // 🐶 fait le rendu de LoginForm avec le prop onSubmit={handleSubmit}
  // 🤖 render(<LoginForm
  // 🐶 créé 2 variables pour les tests : 'username' et 'password' avec des valeurs de tests
  // 🐶 récupère les elements DOM suivants : les champs input 'username' et 'login' (leurs roles est 'textbox' )
  // en utilisant 'getByRole' et le 'name'
  // 🤖 screen.getByRole('textbox',{ name: /Nom d'utilisateur :/i}
  // 🐶 récupère l'element DOM suivant : le bouton (son role est 'button' )
  // en utilisant 'getByRole' et le 'name'
  // 🐶 modifie la valeur des 2 champs input avec `username` et `password` en utilisant
  // 🤖 fireEvent.change(usernameElement, {target: { value: username }});
  // 🐶 simule un click sur le button connexion
  // 🐶 test que 'submittedUsername' soit egal à 'username'
  // 🐶 test que 'submittedPassword' soit egal à 'password'
})
