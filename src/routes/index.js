import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../App'
import Control from '../Control'

export default () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/Control" component={Control} />

  </Switch>
)