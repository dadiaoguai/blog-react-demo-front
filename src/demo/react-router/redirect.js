import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({history}) => 
  fakeAuth.isAuthenticated ?
    
    <p>
      Welcome! <button onClick={() => fakeAuth.signout(() => history.push('/'))}>Sign out</button>
    </p>     :
    
    <p>You are no logged in</p>
    
)

class PrivateRoute1 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {component, ...rest} = this.props

    return (
      <Route {...rest}
        render={props => 
          fakeAuth.isAuthenticated ?
            <component {...props}/> :
            <Redirect to={{
              pathname: '/login',
              state: {from: props.location}
            }}/>
        }
      />
    )
  }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {redirectToReferrer: false}
    this.login = this.login.bind(this)
  }

  login () {
    fakeAuth.authenticate(() => this.setState({redirectToReferrer: true}))
  }

  render () {
    const {from} = this.props.location.state || {from: {path: '/'}}
    const {redirectToReferrer} = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>you must login to view the page at {from.pathname}</p>
        <button onClick={this.login}>Login in</button>
      </div>
    )
  }
}

class AuthExample extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <div>
          <AuthButton/>
          <ul>
            <li><Link to="/public">Public Path</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute1 path="/protected" component={Protected} />
        </div>
      </Router>
    )
  }
}

module.exports = AuthExample
