import React from 'react'

function Header(props) {
  const { title, introduction, postInfo } = props

  return (
    <header
      className={
        introduction ?
          'intro-header headerBackground' :
          'intro-header postBackground'
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className={introduction ? 'site-heading' : 'post-heading'}>
              <h1>{title}</h1>
              {
                introduction ?
                  <span className="subheading">{introduction}</span> :
                  <span className="meta">
                    Posted by <a href="#">{postInfo.author}</a> on {postInfo.createdAt}
                  </span>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
