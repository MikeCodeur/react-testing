import * as React from 'react'

function LoginForm({onSubmit}) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(`handleSubmit avec ${username}, ${password}`)
    onSubmit({username, password})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nom d'utilisateur :</label>
      <input 
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password">Mot de passe :</label>
      <input
        id="password"
        name="password"
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <div>
        <input type="submit" value={'Connexion'} />
      </div>
    </form>
  )
}

export default LoginForm;