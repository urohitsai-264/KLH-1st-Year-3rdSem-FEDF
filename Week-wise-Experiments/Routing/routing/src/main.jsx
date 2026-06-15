import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Master from './components/Master.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Master/>
    </BrowserRouter>
  </StrictMode>
)
