import React from 'react'
import {Redirect} from 'react-router-dom'
import {axiosInstance as axios} from '../../config'

class NewArticle extends React.Component {
  constructor (props) {
    super(props)
    this.back = this.back.bind(this)
    this.state = {
      title: '',
      author: '',
      content: '',
      tags: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTags = this.handleTags.bind(this)
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

    axios.post('articles', this.state)
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

  render () {
    let tags = this.state.tags.join(',')

    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>标题</label>
          <input type='text' className='form-control' value={this.state.title} id='b_title' onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <label>作者</label>
          <input type='text' className='form-control' value={this.state.author} id='b_author' onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <label>内容</label>
          <textarea className='form-control' rows='15' value={this.state.content} id='b_content' onChange={this.handleChange}/>
        </div>
        <div className='form-group'>
          <label>标签</label>
          <input type='text' className='form-control' value={tags} onChange={this.handleTags}/>
        </div>
        <button type='submit' className='btn btn-default'>Submit</button>
        <a href='javascript:;' className='btn btn-default' onClick={this.back}>返回</a>
      </form>
    )
  }
}

export default NewArticle
