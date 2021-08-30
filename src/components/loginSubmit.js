import * as React from 'react'
import LoginForm from './loginForm'

function LoginSubmit() {
  const [dataToSubmit, setDataToSubmit] = React.useState(null)
  const [fetchStatus, setFetchStatus] = React.useState({
    status: 'idle',
    payload: '',
  })

  const endpoint = 'https://example.com/api/login'
  const body = dataToSubmit ? JSON.stringify(dataToSubmit) : null
  React.useEffect(() => {
    if (body) {
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
          } else {
            setFetchStatus({status: 'error', payload: data})
          }
        })
        //.catch(err => setFetchStatus({status: 'error', payload: {errorMessage :err.message}}))
      //  .catch(err => setFetchStatus({status: 'error', payload: {errorMessage :"le username est obligatoire"}}))
    }
  }, [dataToSubmit, body])
//console.log("fetchStatus",fetchStatus)
  return (
    <div>
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
