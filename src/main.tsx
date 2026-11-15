import React from 'react'
import { createRoot } from 'react-dom/client'
import { domAnimation, LazyMotion } from 'motion/react'
import App from './App'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation} strict>
      <App />
    </LazyMotion>
  </React.StrictMode>,
)
