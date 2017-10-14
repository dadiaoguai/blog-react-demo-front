import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { axiosInstance as axios } from '../../config'
import Header from './header'


function Article(props) {
  const { title, digest, author, createdAt, id } = props.article
  return (
    <div className="post-preview">
      <Link to={`/home/articles/${id}`}>
        <h2 className="post-title">{title}</h2>
        <h3 className="post-subtitle">{digest}</h3>
      </Link>
      <p className="post-meta">
        Posted by <a href="#">{author}</a> on {createdAt}
      </p>
      <hr />
    </div>
  )
}

Article.propTypes = {
  article: propTypes.shape({
    title: propTypes.string,
    digest: propTypes.string,
    author: propTypes.string,
    createdAt: propTypes.string,
    id: propTypes.number,
  }),
}

Article.defaultProps = {
  article: {},
}

function Paginaition(props) {
  const { count, page, nextPage, prevPage, limit } = props
  const hasPrev = page > 1
  const hasNext = count > page * limit
  const prev =
    (<a
      className="btn btn-secondary float-left"
      href="#"
      onClick={prevPage}
    >&larr; newer Posts</a>)
  const next =
    (<a
      className="btn btn-secondary float-right"
      href="#"
      onClick={nextPage}
    >Older Posts &rarr;</a>)

  return (
    <div className="clearfix" style={{ paddingBottom: '1rem' }}>
      {hasPrev ? prev : ''}
      {hasNext ? next : ''}
    </div>
  )
}

Paginaition.propTypes = {
  count: propTypes.number,
  page: propTypes.number,
  nextPage: propTypes.func,
  prevPage: propTypes.func,
  limit: propTypes.number,
}

Paginaition.defaultProps = {
  count: 0,
  page: 0,
  limit: 0,
  nextPage: () => null,
  prevPage: () => null,
}

class FrontHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      count: 0,
      page: 1,
    }
    this.limit = 5
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  componentDidMount() {
    axios.get('articles', {
      params: {
        limit: this.limit,
        offset: (this.state.page - 1) * this.limit,
      },
    })
      .then((res) => {
        const { objs, status, count } = res.data
        if (status === 'success') {
          this.setState({
            articles: objs,
            count,
          })
        }
      })
  }

  nextPage(e) {
    e.stopPropagation()
    const { page } = this.state

    axios.get('articles', {
      params: {
        limit: this.limit,
        offset: this.state.page * this.limit,
      },
    })
      .then((res) => {
        const { objs, status, count } = res.data
        if (status === 'success') {
          this.setState({
            articles: objs,
            count,
            page: page + 1,
          })
        }
      })
  }

  prevPage(e) {
    e.stopPropagation()
    const { page } = this.state

    axios.get('articles', {
      params: {
        limit: this.limit,
        offset: (this.state.page - 2) * this.limit,
      },
    })
      .then((res) => {
        const { objs, status, count } = res.data
        if (status === 'success') {
          this.setState({
            articles: objs,
            count,
            page: page - 1,
          })
        }
      })
  }

  render() {
    const articleList = this.state.articles.map(article => <Article article={article} key={article.id} />)
    const { count, page } = this.state
    return (
      <div>
        <Header title="刘佳希的博客" introduction="一个博客" />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              {articleList}
              <Paginaition
                count={count}
                page={page}
                limit={this.limit}
                nextPage={this.nextPage}
                prevPage={this.prevPage}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default FrontHome
