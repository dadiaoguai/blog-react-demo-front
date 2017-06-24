import React from 'react'
import {
  Link,
  Route,
  Redirect
} from 'react-router-dom'
import Login from './login'
import BackendHome from './background/home'

const App = () => (
  <div>
    <Redirect from='/' to='/login'/>
    <Route path='/login' component={Login}/>
    <Route path='/backend/home' component={BackendHome}/>
  </div>
)

export default App
