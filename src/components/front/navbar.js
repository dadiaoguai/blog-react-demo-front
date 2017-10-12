import React from 'react'
import {
  Redirect,
  Route,
  Link,
} from 'react-router-dom'

function Navbar(props) {
  return (
    <nav
      className="navbar fixed-top navbar-toggleable-md navbar-light"
      id="mainNav"
    >
      <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu <i className="fa fa-bars" />
        </button>
        <Link className="navbar-brand page-scroll" to="/home">
          Start Bootstrap
        </Link>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="post.html">
                Sample Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
