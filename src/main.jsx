import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

// Remove initial loader once React takes over
const loader = document.getElementById('initial-loader')
if (loader) {
  loader.style.opacity = '0'
  loader.style.transition = 'opacity 0.3s ease'
  setTimeout(() => loader.remove(), 300)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
