import * as React from 'react'

function useCapitalize(initialValue) {
  const [text, setText] = React.useState(initialValue)
  const capitalize = () => setText(name => name.toUpperCase())
  const uncapitalize = () => setText(name => name.toLowerCase())
  return {text, capitalize, uncapitalize}
}

export default useCapitalize
