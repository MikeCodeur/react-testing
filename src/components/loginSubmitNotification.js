import * as React from 'react'

import LoginForm from './loginForm'
function LoginSubmit() {
  const [dataToSubmit, setDataToSubmit] = React.useState(null)
  const [fetchStatus, setFetchStatus] = React.useState({
    status: 'idle',
    payload: '',
  })
  const [permission, setPermission] = React.useState(null)
  
  const askPerm = async () => {
    let perm = await window.Notification.requestPermission()
    setPermission(perm)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const notifyUser = (name) =>{
    // Vérifions si les autorisations de notification ont déjà été accordées
     if (window.Notification.permission === 'granted') {
      // Si tout va bien, créons une notification
      console.log('indow.Notification.permissio grantedp', askPerm())
      new Notification(`bonjour ${name}`)
    }
  }
 
  const endpoint = 'https://example.com/api/login'
  const body = dataToSubmit ? JSON.stringify(dataToSubmit) : null
  React.useEffect(() => {
    if (body) {
      askPerm()
      setFetchStatus({status: 'feching', payload: ''})
      fetch(endpoint, {
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(async response => {
          const data = await response.json()
          if (response.ok) {
            setFetchStatus({status: 'done', payload: data})
            notifyUser(data.username)
          } else {
            setFetchStatus({status: 'error', payload: data})
          }
        })
        // .catch(err => {
        //   setFetchStatus({status: 'done', payload: {username: 'mike'}})
        //   notifyUser("mike")
        // })
      //.catch(err => setFetchStatus({status: 'error', payload: {errorMessage :err.message}}))
      //  .catch(err => setFetchStatus({status: 'error', payload: {errorMessage :"le username est obligatoire"}}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataToSubmit, body])
  return (
    <div>
      <div>{permission === 'granted'
        ?  'Les notifications sont autorisés'
        : 'veuillez autoriser les notifications'}
        </div>
      {fetchStatus.status === 'feching' ? 'chargement...' : null}

      {fetchStatus.status === 'error' ? (
        <div role="alert" style={{color: 'red'}}>
          {fetchStatus.payload.errorMessage}
        </div>
      ) : null}
      {fetchStatus.status === 'done' ? (
        <div>
          Bonjour <strong>{fetchStatus.payload.username}</strong>
        </div>
      ) : (
        <LoginForm onSubmit={formData => setDataToSubmit(formData)} />
      )}
    </div>
  )
}

export default LoginSubmit
