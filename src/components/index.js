import React from 'react'
import {
  Link,
  Route,
  Redirect
} from 'react-router-dom'
import Screen from '../containers/screen'
import Login from '../containers/login'
import BackendHome from '../containers/background/home'

const App = () => (
  <div>
    <Redirect from='/' to="/backend"/>
    <Route path='/login' component={Login}/>
    <Route path='/backend' component={BackendHome}/>
    <Screen />
  </div>
)

export default App
