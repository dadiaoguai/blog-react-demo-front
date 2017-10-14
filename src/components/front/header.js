import React from 'react'
import propTypes from 'prop-types'

function Header(props) {
  const { title, introduction, postInfo } = props

  return (
    <header
      className={
        introduction ?
          `intro-header ${introduction.includes('what') ? 'about' : 'header'}Background` :
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

Header.propTypes = {
  title: propTypes.string,
  introduction: propTypes.string,
  postInfo: propTypes.shape({
    author: propTypes.string,
    createdAt: propTypes.string,
  }),
}

Header.defaultProps = {
  title: 'blog',
  introduction: null,
  postInfo: null,
}

export default Header
