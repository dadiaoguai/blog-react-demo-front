import React from 'react'
import ReactDom from 'react-dom'
import {  BrowserRouter as Router } from 'react-router-dom'
import './styles/normalize.css'
import './styles/style.scss'

import App from './containers/demo/react-router/modalGalleryCopy'

ReactDom.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
)