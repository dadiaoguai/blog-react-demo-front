import React from 'react'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Screen from '../containers/screen'
import Login from '../containers/login'
import BackendHome from '../containers/background/home'
import Blog from './front'

const App = () =>
  (<div>
    <Redirect from="/" to="/home" />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/backend" component={BackendHome} />
      <Route path="/home" component={Blog} />
    </Switch>
    <Screen />
  </div>)


export default App
