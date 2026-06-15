import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import With_Composition from './components/With_Composition'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <With_Composition></With_Composition>
  </StrictMode>,
)
