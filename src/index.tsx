import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global-styles.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div id="modal-root"></div>
    <App />
  </React.StrictMode>
)
