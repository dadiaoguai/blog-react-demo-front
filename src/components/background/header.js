import React from 'react'
import propTypes from 'prop-types'
import {
  Link,
  withRouter,
} from 'react-router-dom'
import { axiosInstance as axios } from '../../config'
import { logout } from '../../actions/index'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    const { dispatch } = this.props
    const run = async () => {
      const { data } = await axios.put('logout')

      if (data.status === 'success') {
        dispatch(logout())
      }

      return null
    }

    run().catch(err => console.log(err))
  }

  render() {
    return (
      <header className="b_header">
        <nav>
          <Link to="/backend/articles"><span className="first">文章管理</span></Link>
          <Link to="/home"><span className="first">主页</span></Link>
        </nav>
        <button onClick={this.logout} className="btn btn-default">登出</button>
      </header>
    )
  }
}

Header.propTypes = {
  dispatch: propTypes.func,
}

Header.defaultProps = {
  dispatch: () => null,
}

export default withRouter(Header)
