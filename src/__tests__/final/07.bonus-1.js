// mocker les requêtes HTTP
// http://localhost:3000/alone/final/05.js

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import {useCurrentPosition} from 'react-use-geolocation'
import GeoLoc from '../../components/geoloc'

jest.mock('react-use-geolocation')

test("affiche un message d erreur quand la geolocalisation n'est pas supporté", async () => {
  const fakeError = {message: 'la géolocalisation est non supporté'}

  let setValue
  function useMock() {
    const state = React.useState([])
    setValue = state[1]
    return state[0]
  }
  useCurrentPosition.mockImplementation(useMock)
  render(<GeoLoc />)
  expect(screen.getByText(/chargement/i)).toBeInTheDocument()

  act(() => {
    setValue([null, fakeError])
  })
  expect(screen.queryByLabelText(/chargement/i)).not.toBeInTheDocument()
  expect(
    screen.queryByText(/la géolocalisation est non supporté/i),
  ).toBeInTheDocument()
})
