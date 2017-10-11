import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import Screen from '../containers/screen'
import Login from '../containers/login'
import BackendHome from '../containers/background/home'
import Blog from './front'

const App = () =>
  (<div>
    <Route path="/login" component={Login} />
    <Route path="/backend" component={BackendHome} />
    <Route path="/home" component={Blog} />
    <Screen />
  </div>)


export default App
