import React from 'react'
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import '../../styles/lib/bootstrap/css/bootstrap.min.css'
import '../../styles/lib/font-awesome/css/font-awesome.min.css'
import '../../styles/css/clean-blog.min.css'
// import '../../styles/lib/bootstrap/js/bootstrap.min'
import '../../styles/js/clean-blog.min'
import Navbar from './navbar'
import FrontHome from './home'
import Article from './article'
import About from './about'
import Footer from './footer'

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Redirect to="/home" />
        <Switch>
          <Route path="/home" exact component={FrontHome} />
          <Route path="/home/articles/:id" component={Article} />
          <Route path="/home/aboutme" component={About} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Blog
