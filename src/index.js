import React from 'react'
import ReactDom from 'react-dom'
import './styles/normalize.css'
import './styles/style.scss'

import App from './containers/clock'

ReactDom.render(
  <App/>,
  document.getElementById('root')
)