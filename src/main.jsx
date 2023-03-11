import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppProvider } from './components/UseGlobalContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>

  </React.StrictMode>,
)
