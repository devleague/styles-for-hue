import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App, Home, Template } from './containers';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route
      path="/" component={ App }
    >
      <IndexRoute component={ Home } />
      <Route
        path="/template" component={ Template }
      >
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
)