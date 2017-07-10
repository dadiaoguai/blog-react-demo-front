import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

const Sandwiches = () => <h3>Sandwiches</h3>
const Tacos = ({routes}) => 
  <div>
    <h3>Tacos</h3>
    <ul>
      <li><Link to='/tacos/bus'>Bus</Link></li>
      <li><Link to='/tacos/cart'>Cart</Link></li>
    </ul>
    {routes.map((route, index) =>
      <SubRoute route={route} key={index}/>
    )}
  </div>


const SubRoute = ({route}) => 
  <Route
    path={route.path} render={props =>
      <route.component {...props} routes={route.routes}/>
    }
  />


const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  }, {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      }, {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

class Example extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/tacos'>Tacos</Link></li>
          <li><Link to='/sandwiches'>Sandwiches</Link></li>
        </ul>
        {routes.map((route, index) =>
          <SubRoute key={index} route={route}/>
        )}
      </div>
    )
  }
}

module.exports = Example
