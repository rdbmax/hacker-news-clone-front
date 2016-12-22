import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './app'
import Home from './components/home'
import Submit from './components/submit'
import NoMatch from './components/no-match'

const AppRouter = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <Route path="/" component={ () => <Home type='popular' /> } />
      <Route path="/popular" component={ () => <Home type='popular' /> } />
      <Route path="/recent" component={ () => <Home type='recent' /> } />
      <Route path="submit" component={ Submit } />
      <Route path="*" component={ NoMatch } />
    </Route>
  </Router>
)

export default AppRouter
