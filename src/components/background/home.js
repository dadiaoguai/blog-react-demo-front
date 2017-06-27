import React from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../common/header'

class BackendHome extends React.Component {

  render() {
    const {account, match, dispatch} = this.props
    if (!account.active) {
      return <Redirect from={match.path} to='/login'/>
    }

    return (
       <div>
         <Header dispatch={dispatch}/>
         <main>
           欢迎!
         </main>
       </div>
    )
  }
}

export default BackendHome