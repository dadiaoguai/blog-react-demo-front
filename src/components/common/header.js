import React from 'react'
import {
  Redirect,
  Link,
  withRouter
} from 'react-router-dom'
import axios from 'axios'
import config from '../../config'
import {logout} from '../../actions'
const logoutUrl = config.localhost + 'logout'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout(e) {
    let {dispatch} = this.props
    let run = async () => {
      let {data} = await axios.put(logoutUrl,{})
      if (data.status === 'success') {
        dispatch(logout())
        return <Redirect to='/login'/>
      }
    }

    run().catch(err => console.log(err))
  }

  render() {

    return (
      <header>
        <nav>
          <Link to='/backend/articles/index'><span className="first">文章管理</span></Link>
          <Link to='/backend/tags/index'><span className="first">标签管理</span></Link>
        </nav>
        <button onClick={this.logout} className="btn btn-default">登出</button>
      </header>
    )
  }
}

export default withRouter(Header)