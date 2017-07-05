import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

class CustomerLinkExample extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <OldSchoolMenuLink activeOnlyExact={true} to="/" label="Home"/>
        <OldSchoolMenuLink to="/about" label="About"/>
        <hr/>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    )
  }
}

class OldSchoolMenuLink extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {activeOnlyExact, to, label} = this.props

    return (
      <Route
        exact={activeOnlyExact}
        path={to}
        children={({match}) => 
          <div className={match ? 'active' : null}>
            {match ? '>' : ''}<Link to={to}>{label}</Link>
          </div>
        }
      />
    )
  }
}

const Home = () => <h3>Home</h3>
const About = () => <h3>About</h3>

module.exports = CustomerLinkExample
