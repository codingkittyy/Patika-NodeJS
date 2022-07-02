import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { PortfolioContextProvider } from './context/PortfolioContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <PortfolioContextProvider>
    <App />
  </PortfolioContextProvider>
)
