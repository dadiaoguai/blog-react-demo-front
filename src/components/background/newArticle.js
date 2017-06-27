import React from 'react'

class NewArticle extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form-group">
          <label>标题</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>作者</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>内容</label>
          <textarea className="form-control" rows="15" />
        </div>
        <div className="form-group">
          <label>标签</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
        <a href="javascript:;" className="btn btn-default">返回</a>
      </form>
    )
  }
}

export default NewArticle