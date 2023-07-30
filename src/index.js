import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import colors from './data/colors.json'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

export const ColorContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ColorContext.Provider value={{ colors }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColorContext.Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
