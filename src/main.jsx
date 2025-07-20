import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/reset.css"
import './index.css'
import "./styles/flexbox-utility-classes.css"
import App from './Episodes/E8'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// imarena.ai
// diract chat => select chat => copy code