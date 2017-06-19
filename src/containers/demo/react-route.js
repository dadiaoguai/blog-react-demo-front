import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>主页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

const Topic = ({ match }) => (
<div>
  <h3>{match.params.topicId}</h3>
</div>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          ttt
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>主页</Link></li>
        <li><Link to='/about'>关于</Link></li>
        <li><Link to='/topics'>其他</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

export default BasicExample