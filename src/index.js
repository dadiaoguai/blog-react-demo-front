import 'react-hot-loader/patch'
import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/normalize.css'
import './styles/bootstrap.min.css'
import './styles/style.scss'
import 'jquery'
import './styles/bootstrap.min'
import App from './components'
import AppStore from './reducers'

const store = createStore(AppStore)

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components', () => {
    const nextApp = require('./components').default

    render(nextApp)
  })
}

