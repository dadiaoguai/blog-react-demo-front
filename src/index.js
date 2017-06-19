import React from 'react'
import ReactDom from 'react-dom'
import './styles/normalize.css'
import './styles/style.scss'

import App from './containers/demo/componentWillReceiveProps'

ReactDom.render(
  <App/>,
  document.getElementById('root')
)