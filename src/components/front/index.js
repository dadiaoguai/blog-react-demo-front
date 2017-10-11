import React from 'react'
import {
  Redirect,
  Route,
  Link,
} from 'react-router-dom'
import '../../styles/lib/bootstrap/css/bootstrap.min.css'
import '../../styles/lib/font-awesome/css/font-awesome.min.css'
import '../../styles/css/clean-blog.min.css'
// import '../../styles/lib/bootstrap/js/bootstrap.min'
import '../../styles/js/clean-blog.min'
import Navbar from './navbar'
import FrontHome from './home'
import Footer from './footer'

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FrontHome />
        <Footer />
      </div>
    )
  }
}

export default Blog
