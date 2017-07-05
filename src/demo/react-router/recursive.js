import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import _ from 'lodash'

const PEEPS = [
  {
    id: 0,
    name: 'Michelle',
    friends: [1, 2, 3]
  }, {
    id: 1,
    name: 'Sean',
    friends: [0, 3]
  }, {
    id: 2,
    name: 'Kim',
    friends: [0, 1, 3]
  }, {
    id: 3,
    name: 'David',
    friends: [1, 2]
  }
]

class Example extends React.Component {
  render () {
    return (
      <Person match={{
        params: {id: 0},
        url: ''
      }}/>
    )
  }
}

class Person extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let {params, url} = this.props.match
    let target = _.find(PEEPS, i => i.id == params.id)

    return (
      <div>
        <h3>{target.name}'s friends:</h3>
        <ul>
          {target.friends.map(id =>
            <li key={id}><Link to={`${url}/${id}`}>{_.find(PEEPS, j => j.id === id).name}</Link></li>
          )}
        </ul>
        <Route path={`${url}/:id`} component={Person}/>
      </div>
    )
  }
}

module.exports = Example
