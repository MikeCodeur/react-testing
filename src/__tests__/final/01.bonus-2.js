// test basique avec ReactDOM
// 🚀 dispatchEvent et MouseEven
// http://localhost:3000/alone/final/01.js

import ReactDOM from 'react-dom'
import Hello from '../../components/hello'

beforeEach(() => {
  document.body.innerHTML = null
})

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  const div = document.createElement('div')
  document.body.append(div)

  ReactDOM.render(<Hello name="John" />, div)

  const envoyer = div.querySelector('input')
  const label = div.firstChild.querySelector('div')

  expect(label.textContent).toBe(`Bonjour John`)
  const envoyerClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  envoyer.dispatchEvent(envoyerClickEvent)
  expect(label.textContent).toBe(`Merci`)
})
