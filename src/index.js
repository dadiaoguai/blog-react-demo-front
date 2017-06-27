import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {  BrowserRouter as Router } from 'react-router-dom'
import './styles/normalize.css'
import './styles/bootstrap.min.css'
import './styles/style.scss'
import './styles/bootstrap.min'
import App from './components'
import AppStore from './reducers'

const store = createStore(AppStore)

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
)