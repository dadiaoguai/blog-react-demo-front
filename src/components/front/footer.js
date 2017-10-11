import React from 'react'

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-github fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
