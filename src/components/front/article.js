import React from 'react'
import propTypes from 'prop-types'
import { axiosInstance as axios, md } from '../../config'
import Header from './header'

const htmlContent = content => ({ __html: md.render(content || '') })
// const MarkdownPreview = ({ content }) => (<div dangerouslySetInnerHTML={htmlContent(content)} />)

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = { article: {} }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    axios
      .get(`articles/${id}`)
      .then((res) => {
        const { data } = res

        if (data.status === 'failed') {
          alert(data.msg)
        }
        this.setState({ article: data.obj })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { title, author, createdAt, content } = this.state.article
    const postInfo = { author, createdAt }
    return (
      <div>
        <Header title={title} postInfo={postInfo} />
        <article>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 offset-lg-2 col-md-10 offset-md-1"
                dangerouslySetInnerHTML={htmlContent(content)}
              />
            </div>
          </div>
        </article>
      </div>
    )
  }
}

Article.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number,
    }),
  }),
}

Article.defaultProps = {
  match: {
    params: {
      id: 1,
    },
  },
}

export default Article

