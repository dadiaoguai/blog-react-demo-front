import React from 'react'
import {
  Route,
  Link,
  Prompt
} from 'react-router-dom'

class Example extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Form</Link></li>
          <li><Link to='/one'>One</Link></li>
          <li><Link to='/two'>Two</Link></li>
        </ul>
        <hr/>
        <Route exact path='/' component={Form}/>
        <Route path='/one' render={() => <h3>One</h3>}/>
        <Route path='/two' render={() => <h3>Two</h3>}/>
        <Route/>
      </div>
    )
  }
}

class Form extends React.Component {
  state = {isBlocking: false}
  render () {
    const {isBlocking} = this.state

    return (
      <form onSubmit={event => {
        event.preventDefault()
        event.target.reset()
        this.setState({isBlocking: false})
      }}>
        <Prompt
          when={isBlocking}
          message={location => `你想前往${location.pathname}`}
        />
        <p>
          Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>
        <div>
          <input type='text' onChange={event => {
            this.setState({isBlocking: event.target.value.length > 0})
          }}/>
        </div>
        <p><button>提交</button></p>
      </form>
    )
  }
}

module.exports = Example
