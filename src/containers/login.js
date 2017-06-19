import React from 'react'
import _ from 'lodash'
import axios from 'axios'

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
    console.log(this.state)
    if (_.isEmpty(this.state.username) || _.isEmpty(this.state.password)) {
      this.setState({
        message: '账号和密码不允许为空!',
        username: '',
        password: ''
      })
    } else {
      this.setState({
        message: ''
      })

    }
  }

  render() {
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

module.exports = LoginBar
