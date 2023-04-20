import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { GlobalStyles } from './style/Global/global'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyles/>
  </React.StrictMode>,
)
