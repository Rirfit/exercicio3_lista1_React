import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Verify from './components/Verify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Verify autenticado ='true' nome='Cleber'/>
   <Verify autenticado ='false' nome='Jaja'/>
   <Verify autenticado ='true' nome='Jaja'/>
  </StrictMode>,
)
