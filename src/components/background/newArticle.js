import React from 'react'
import {Redirect} from 'react-router-dom'
import {axiosInstance as axios, marked} from '../../config'

class NewArticle extends React.Component {
  constructor (props) {
    super(props)
    this.back = this.back.bind(this)
    this.state = {
      title: '',
      author: '',
      content: '',
      tags: [],
      preview: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTags = this.handleTags.bind(this)
    this.openPreview = this.openPreview.bind(this)
    this.closePreview = this.closePreview.bind(this)
  }

  back (e) {
    const {history} = this.props

    e.stopPropagation()
    history.goBack()
  }

  handleChange (e) {
    e.preventDefault()
    let key = e.target.id.replace('b_', '')

    this.setState({[key]: e.target.value})
  }

  handleTags (e) {
    let value = e.target.value.split(',')

    this.setState({tags: value.map(i => i.trim())})
  }

  handleSubmit (e) {
    let {history} = this.props

    e.preventDefault()
    if (!this.state.title) {
      return window.alert('标题不允许为空!')
    }

    return axios.post('articles', this.state)
      .then(response => {
        let {data} = response

        if (data.status === 'success') {
          history.goBack()
        } else {
          window.alert(`创建文章失败: ${data.msg}`)
        }
      })
      .catch(err => window.alert(`创建失败, ${err.message}`))
  }

  openPreview (e) {
    this.setState({preview: true})
  }

  closePreview (e) {
    this.setState({preview: false})
  }

  render () {
    let tags = this.state.tags.join(',')
    let preview = this.state.preview
    console.log(preview)

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
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
            <input type="text" className="form-control" value={tags} onChange={this.handleTags}/>
          </div>
          <a className="btn btn-default" onClick={this.openPreview}>预览</a>
          <button type="submit" className="btn btn-default">提交</button>
          <a className="btn btn-default" onClick={this.back}>返回</a>
        </form>
        {preview ? <Marked article={this.state}/> : null}
      </div>
    )
  }
}

const Marked = ({article}) =>
  <div>
    <article>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <section>{marked(article.content)}</section>
    </article>
    <hr/>
    <a className="btn btn-default">关闭</a>
  </div>

export default NewArticle
