import React from 'react'
import {
  Redirect,
  Route,
  Link,
} from 'react-router-dom'
import { axiosInstance as axios } from '../../config'
import Header from './header'


function Article(props) {
  const { title, digest, author, createdAt, id } = props.article
  return (
    <div className="row">
      <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
        <div className="post-preview">
          <Link to={`/home/articles/${id}`}>
            <h2 className="post-title">{title}</h2>
            <h3 className="post-subtitle">{digest}</h3>
          </Link>
          <p className="post-meta">
            Posted by <a href="#">{author}</a> on {createdAt}
          </p>
        </div>
        <hr />
      </div>
    </div>
  )
}

class FrontHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { articles: [] }
  }

  componentDidMount() {
    axios.get('articles', {
      params: {
        limit: 10,
        offset: 0,
      },
    })
      .then((res) => {
        const { objs, status } = res.data
        if (status === 'success') {
          this.setState({ articles: objs })
        }
      })
  }

  render() {
    const articleList = this.state.articles.map(article => <Article article={article} key={article.id} />)

    return (
      <div>
        <Header title="刘佳希的博客" introduction="一个博客" />

        <div className="container">
          {articleList}
        </div>

      </div>
    )
  }
}

export default FrontHome
