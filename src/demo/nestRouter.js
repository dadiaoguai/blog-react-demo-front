import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

const Box2 = () => <h3>2级嵌套</h3>
const Box1 = () => <h2>1级嵌套</h2>

const Wrapper = () => (
  <div>
    <ul>
      <Link to='/level1'>去1</Link>
      <Link to='/level1/level2'>去2</Link>
    </ul>
    <Route path='/level1' component={Box1}>
      <Route path='level2' component={Box2}/>
    </Route>
  </div>
)

export default Wrapper