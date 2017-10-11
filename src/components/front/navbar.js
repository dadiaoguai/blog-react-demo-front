import React from 'react'

function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-toggleable-md navbar-light" id="mainNav">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fa fa-bars" />
        </button>
        <a className="navbar-brand page-scroll" href="index.html">Start Bootstrap</a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="post.html">Sample Post</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
