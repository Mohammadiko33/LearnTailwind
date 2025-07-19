import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Components/reset.css"
import './index.css'
import "./Components/flexbox-utility-classes.css"
import App from './Components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// imarena.ai
// diract chat => select chat => copy code