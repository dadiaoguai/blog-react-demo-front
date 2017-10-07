import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { axiosInstance as axios } from '../../config'

class ArticleManagement extends React.Component {
  constructor(props) {
    super(props)
    this.state = { articles: [] }
    this.deleteArticle = this.deleteArticle.bind(this)
  }

  componentDidMount() {
    axios
      .get('articles')
      .then((response) => {
        const { data } = response

        if (data.status === 'success') {
          this.setState({ articles: data.objs })
        } else {
          console.log(data.msg)
        }
      })
      .catch(err => console.log(err))
  }

  deleteArticle(e) {
    e.preventDefault()
    const id = e.target.dataset.value

    axios
      .delete(`articles/${id}`)
      .then((response) => {
        const { data } = response

        if (data.status === 'success' && data.objs[0] !== 0) {
          console.log('更新成功')
          axios
            .get('articles')
            .then((response) => {
              const { data } = response

              if (data.status === 'success') {
                this.setState({ articles: data.objs })
              } else {
                console.log(data.msg)
              }
            })
            .catch(err => console.log(err))
        } else {
          console.log(data.msg)
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    const articles = this.state.articles.map(article =>
      (<tr key={article.id}>
        <td><Link to={`/backend/articles/${article.id}`}>{article.title}</Link></td>
        <td>{article.author}</td>
        <td>{article.createdAt}</td>
        <td>{article.updatedAt}</td>
        <td>
          <Link to={`/backend/articles/${article.id}`} className="marginRight-5px">编辑</Link>
          <a href="javascript:;" data-value={article.id} onClick={this.deleteArticle}>删除</a>
        </td>
      </tr>),
    )

    return (
      <div>
        <Link to="/backend/articles/new">
          <span className="btn btn-default new">新增</span>
        </Link>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>文章标题</th>
              <th>作者</th>
              <th>创建时间</th>
              <th>修改时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {articles}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ArticleManagement
