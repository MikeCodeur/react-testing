// test avec React Testing Library
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react'
// ⛏️ supprime l'import de 'react-dom' il n'est plus necessaire.
import ReactDOM from 'react-dom'
// 🐶 importe @testing-library/react à la place
// 🤖 import {render, fireEvent} from '@testing-library/react'
import Hello from '../../components/hello'

// ⛏️ supprime le netoyage du DOM, testing-library s'occupe de ça.
beforeEach(() => {
  document.body.innerHTML = null
})

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  // ⛏️ supprime la création de la div principale, testing-library s'occupe de ça.
  const div = document.createElement('div')
  document.body.append(div)

  // 🐶 Utilise le `render` de testing-library.
  // Note : Aucune div est necessaire à la création.
  // render retourne un objet avec avec tout un tas de choses utilise pour nos tests
  // mais ici nous allons uniquement utiliser le 'container' qui est l'élement DOM
  // contenant notre composant
  // 🤖 const {container} = render(<Hello name="John" />)
  ReactDOM.render(<Hello name="John" />, div)

  // 🐶 N'utilise plus div mais le container
  const envoyer = div.querySelector('input')
  const label = div.firstChild.querySelector('div')

  expect(label.textContent).toBe(`Bonjour John`)
  // 🐶 Remplace l'évnement clique par fireEvent.click(envoyer)
  const envoyerClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  envoyer.dispatchEvent(envoyerClickEvent)
  expect(label.textContent).toBe(`Merci`)
})
