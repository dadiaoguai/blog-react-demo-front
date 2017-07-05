import React from 'react'

class NewArticle extends React.Component {
  constructor (props) {
    super(props)
    this.back = this.back.bind(this)
    this.state = {
      title: '',
      author: '',
      content: '',
      tags: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  back (e) {
    const {history} = this.props

    e.stopPropagation()
    history.goBack()
  }

  handleChange (e) {
    e.preventDefault()
    let key = e.target.id.replace('b_', '')

    console.log(key)
    this.setState({[key]: e.target.value})
  }

  render () {
    let tags = this.state.tags.join(',')

    return (
      <form className="form">
        <div className="form-group">
          <label>标题</label>
          <input type="text" className="form-control" value={this.state.title} id="b_title" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>作者</label>
          <input type="text" className="form-control" value={this.state.author} id="b_author" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>内容</label>
          <textarea className="form-control" rows="15" value={this.state.content} id="b_content" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>标签</label>
          <input type="text" className="form-control" value={tags}/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
        <a href="javascript:;" className="btn btn-default" onClick={this.back}>返回</a>
      </form>
    )
  }
}

export default NewArticle
