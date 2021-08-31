import * as React from 'react'
import {useCurrentPosition} from 'react-use-geolocation'

function GeoLoc() {
  const [position, error] = useCurrentPosition()

  if (!position && !error) {
    return 'chargement'
  }

  if (error) {
    return (
      <div role="alert">
        {error.message}
      </div>
    )
  }

  return (
    <div>
      <div>La latitude est de : {position.coords.latitude}</div>
      <div>La longitude est de : {position.coords.longitude}</div>
    </div>
  )
}

export default GeoLoc
