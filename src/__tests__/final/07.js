// mocker un module

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import {useCurrentPosition} from 'react-use-geolocation'
import GeoLoc from '../../components/geoloc'

jest.mock('react-use-geolocation')

test("affiche la géolocalisation de l'utilisateur", async () => {
  const fakePosition = {
    coords: {
      latitude: 52,
      longitude: 96,
    },
  }

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
    setValue([fakePosition])
  })

  expect(screen.queryByLabelText(/chargement/i)).not.toBeInTheDocument()
  expect(screen.getByText(/latitude/i)).toHaveTextContent(
    `La latitude est de : ${fakePosition.coords.latitude}`,
  )
  expect(screen.getByText(/longitude/i)).toHaveTextContent(
    `La longitude est de : ${fakePosition.coords.longitude}`,
  )
})
