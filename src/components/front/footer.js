import React from 'react'

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="http://weibo.com/u/5637391834">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-weibo fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.zhihu.com/people/liu-jia-xi-30-85/activities">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-quora fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/dadiaoguai">
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
