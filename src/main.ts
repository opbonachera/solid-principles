import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Principios SOLID y Clean Code</h1>
    <p>Realizando curso de Fernando Herrera</p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
