import React from 'react'
import {
  Redirect,
  Route
} from 'react-router-dom'
import Header from './header'
import ArticleManagement from './articleManagement'
import NewArticle from './newArticle'

class BackendHome extends React.Component {

  render () {
    const {account, match, dispatch} = this.props

    if (!account.active) {
      return <Redirect from={match.path} to='/login'/>
    }

    return (
      <div>
        <Header dispatch={dispatch}/>
        <main className='backend'>
          <Redirect from='/backend' to='/backend/articles/index'/>

          <Route path='/backend/articles/index' component={ArticleManagement}/>
          <Route path='/backend/articles/new' component={NewArticle}/>
        </main>
      </div>
    )
  }
}

export default BackendHome
