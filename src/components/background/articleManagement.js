import React from 'react'
import {
  Link
} from 'react-router-dom'
import {axiosInstance as axios} from '../../config'

class ArticleManagement extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount () {
    axios
      .get('articles')
      .then(response => {
        let {data} = response

        if (data.status === 'success') {
          this.setState({articles: data.objs})
        } else {
          console.log(data.msg)
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    const articles = this.state.articles.map(article =>
      <tr key={article.id}>
        <td>{article.title}</td>
        <td>{article.author}</td>
        <td>{article.createdAt}</td>
        <td>{article.updatedAt}</td>
        <td>
          <Link to='/backend/articles/new'>编辑</Link>
          <a href='javascript:;'>删除</a>
        </td>
      </tr>
    )

    return (
      <div>
        <Link to='/backend/articles/new'>
          <span className='btn btn-default new'>新增</span>
        </Link>
        <table className='table table-bordered'>
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
