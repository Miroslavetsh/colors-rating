import React from 'react'
import ReactDOM from 'react-dom/client'

import colors from './data/colors.json'
import ColorProvider from './components/ColorContext'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ColorProvider value={{ colors }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColorProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
