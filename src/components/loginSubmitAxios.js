import * as React from 'react'
import LoginForm from './loginForm'
import axios from 'axios'

function LoginSubmit() {
  const [dataToSubmit, setDataToSubmit] = React.useState(null)
  const [fetchStatus, setFetchStatus] = React.useState({
    status: 'idle',
    payload: '',
  })

  const endpoint = 'https://exampleaxios.com/api/login'
  const body = dataToSubmit ? JSON.stringify(dataToSubmit) : null
  React.useEffect(() => {
    if (body) {
      setFetchStatus({status: 'feching', payload: ''})
      axios
        .post(endpoint, body)
        .then(data => {
          setFetchStatus({status: 'done', payload: data})
        })
        .catch(err => setFetchStatus({status: 'error', payload: 'erreur'}))
    }
  }, [dataToSubmit, body])
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
