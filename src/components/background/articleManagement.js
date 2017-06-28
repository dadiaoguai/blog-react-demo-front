import React from 'react'
import {
  Link
} from 'react-router-dom'

class ArticleManagement extends React.Component {
  render() {
    return (
      <div>
        <Link to='/backend/articles/new'>
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
          <tr>
            <td>文章标题1</td>
            <td>刘佳希</td>
            <td>2017-05-01 14:15</td>
            <td>2017-05-01 14:15</td>
            <td>
              <a href="javascript:;" className="first">编辑</a>
              <a href="javascript:;">删除</a>
            </td>
          </tr>
          <tr>
            <td>这是很长的标题这是很长的标题这是很长的标题</td>
            <td>刘佳希</td>
            <td>2017-05-01 14:15</td>
            <td>2017-05-01 14:15</td>
            <td>
              <a href="javascript:;" className="first">编辑</a>
              <a href="javascript:;">删除</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ArticleManagement
