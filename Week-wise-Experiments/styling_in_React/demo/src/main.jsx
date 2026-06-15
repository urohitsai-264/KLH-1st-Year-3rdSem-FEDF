import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Approach2 from './Approach2.jsx'
import Approach4 from './Approach4.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Approach4/>
  </StrictMode>,
)
