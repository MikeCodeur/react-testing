// mocker un module
// http://localhost:3000/alone/exercise/07.js

/* eslint-disable no-unused-vars */
import * as React from 'react'
import {render, screen, act} from '@testing-library/react'

// 🐶 importe le module 'react-use-geolocation'
// 🤖 import {useCurrentPosition} from 'react-use-geolocation'
import GeoLoc from '../../components/geoloc'

// 🐶 mock le module avec `jest.mock`
jest.mock('react-use-geolocation')

test("affiche la géolocalisation de l'utilisateur", async () => {
  // 🐶 créé un objet 'fakePosition' qui contient la proprieté 'coords'
  // 🤖
  // coords: {
  //   latitude: 52,
  //   longitude: 96,
  // },
  // 🐶 créé hook mock 'useMock' pour mocker l'implementation de useCurrentPosition
  // 🤖
  // let setValue
  // function useMock() {
  //   const state = React.useState([])
  //   setValue = state[1]
  //   return state[0]
  // }
  // 🐶 appele 'mockImplementation' de 'useCurrentPosition' en passant en parametre le 'useMock'
  // 🐶 effectue le rendu de <GeoLoc /> avec render
  // 🐶 verifie que le texte 'chargement' est bien dans le document
  // 🐶 change la valeur du state de useMock avec 'fakePosition'
  // 🤖 utilise `act` et 'setValue'
  // 🐶 verifie que le text  'chargement' n'est plus dans le document
  // 🐶 verifie que le texte  'La latitude est de : ... ' est présent
  // 🐶 verifie que le texte  'La longitude est de : ... ' est présent
})
