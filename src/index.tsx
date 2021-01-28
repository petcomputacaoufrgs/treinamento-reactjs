import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import PieceProvider from './context/provider/piece'

ReactDOM.render(
  <React.StrictMode>
    <PieceProvider>
      <App />
    </PieceProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
