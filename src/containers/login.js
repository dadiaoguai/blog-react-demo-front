import React from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'
import {login} from '../actions'
import config from '../config'

const loginUrl = config.localhost + 'login'

class LoginBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    let [username, password] = [this.username.value, this.password.value]
    let {dispatch} = this.props
    e.stopPropagation()
    if (_.isEmpty(username)|| _.isEmpty(password)) {
      this.setState({
        message: '账号或者密码不允许为空!'
      })
      this.username.value = ''
      this.password.value = ''
    }

    let run = async () => {
      let {data} = await axios.post(loginUrl, {username, password})
      if (data.status === 'failed') {
        this.setState({
          message: data.msg
        })
        this.username.value = ''
        this.password.value = ''
      } else {
        dispatch(login(username, password))
      }
    }

    run().catch(err => {
      this.setState({
        message: err.message
      })
      this.username.value = ''
      this.password.value = ''
    })
  }

  render() {
    const {from} = this.props.location.state || { from: { pathname: '/backend/home' } }
    const {active} = this.props

    if (active) {
      return <Redirect to={from}/>
    }
    return  (
      <div className="login-bar">
        <p className="message">{this.state.message}</p>
        <div className="child top25">
          <label>账号:</label>
          <input type="text" ref={input => this.username = input}/>
        </div>
        <div className="child">
          <label>密码:</label>
          <input type="password" ref={input => this.password = input}/>
        </div>
        <button className="button" type="button" onClick={this.onSubmit}>提交</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  active: state.account.active || false
})

const Login = withRouter(connect(mapStateToProps)(LoginBar))

export default Login

