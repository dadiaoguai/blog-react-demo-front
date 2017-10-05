import React from 'react'
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './header'
import ArticleManagement from './articleManagement'
import NewArticle from './newArticle'
import ArticleDetail from './articleDetail'

class BackendHome extends React.Component {
  render() {
    const { account, match, dispatch } = this.props

    if (!account.active) {
      return <Redirect from={match.path} to="/login" />
    }

    return (
      <div>
        <Header dispatch={dispatch} />
        <main className="backend">
          <Redirect from="/backend" to="/backend/articles/index" />

          <Switch>
            <Route exact path="/backend/articles/index" component={ArticleManagement} />
            <Route exact path="/backend/articles/new" component={NewArticle} />
            <Route path="/backend/articles/:id" component={ArticleDetail} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default BackendHome
