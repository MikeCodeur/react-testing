// test de Hook personnalisé
// http://localhost:3000/alone/exercise/09.js

/* eslint-disable no-unused-vars */
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import useCapitalize from '../../components/useCapitalize'
import userEvent from '@testing-library/user-event'

// 🐶 créé un composant <UseCapitalizeHook> qui utilise le hook 'useCapitalize'
// le hook s'utilise de la manière suivante
// 🤖 const {text, capitalize, uncapitalize} = useCapitalize(children)
// ce composant aura un libéllé qui affiche text
// un bouton capitalize
// un bouton uncapitalize
// <UseCapitalizeHook>Ceci est un texte</UseCapitalizeHook>

test('rendu du hook useCapitalize est des fonctions capitalize/uncapitalize', () => {
  // 🐶 créé une variable 'texte' avec un texte à tester
  // 🐶 fais le rendu du composant avec le texte
  // 🤖 render(<UseCapitalizeHook>{texte}</UseCapitalizeHook>)
  // 🐶 recupère les 2 buttons capitalize/uncapitalize
  // 🐶 teste que la valeur du libellé du composant soit bien égale à 'texte'
  // 🐶 simule un click sur capitalize
  // 🐶 teste que la valeur du libellé du composant soit bien égale à 'texte.toUpperCase()'
  // 🐶 simule un click sur uncapitalize
  // 🐶 teste que la valeur du libellé du composant soit bien égale à 'texte.toLowerCase()'
})
