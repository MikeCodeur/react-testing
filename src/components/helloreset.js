import * as React from 'react'

function HelloReset({name}) {
  const [label, setLabel] = React.useState(`Bonjour ${name}`)
  return (
    <div>
      <div>
        <div role="status">{label}</div>
      </div>
      <input type="button" value="envoyer" onClick={e => setLabel(`Merci`)} />
      <input
        type="button"
        value="reset"
        onClick={e => setLabel(`Bonjour ${name}`)}
      />
    </div>
  )
}
export default HelloReset
