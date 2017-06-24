import React from 'react'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'
import config from '../config'

const loginUrl = config.localhost + 'login'

class LoginBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: ''
    }
    this.getUsername = this.getUsername.bind(this)
    this.getPassword = this.getPassword.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
  }

  getUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  getPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handlerSubmit(e) {
    e.stopPropagation()
    if (_.isEmpty(this.state.username) || _.isEmpty(this.state.password)) {
      return this.setState({
        message: '账号和密码不允许为空!',
        username: '',
        password: '',
        isLogin: false
      })
    }

    let run = async () => {
      let {data} = await axios.post(loginUrl, {
        username: this.state.username,
        password: this.state.password
      })

      if (data.status === 'success') {
        this.setState({
          isLogin: true
        })
      } else {
        this.setState({
          message: `登录失败: ${data.msg}`,
          username: '',
          password: ''
        })
      }
    }

    run().catch(err => {
      this.setState({
        message: `登录失败: ${err.message}`,
        username: '',
        password: ''
      })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/backend/home' } }
    if (this.state.isLogin) {
      return (<Redirect to={from}/>)
    }

    return  (
      <div className="login-bar">
        <p className="message">{this.state.message}</p>
        <div className="child top25">
          <label>账号:</label>
          <input type="text" value={this.state.username} onChange={this.getUsername}/>
        </div>
        <div className="child">
          <label>密码:</label>
          <input type="password" value={this.state.password} onChange={this.getPassword}/>
        </div>
        <button className="button" type="button" onClick={this.handlerSubmit}>提交</button>
      </div>
    )
  }
}

export default LoginBar
