import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // <--- Importa esto
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>        {/* <-- Aquí envuelves el App */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
