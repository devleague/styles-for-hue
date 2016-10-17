import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './reducers';
import { App, Home, TemplateEdit } from './containers';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route
        path="/" component={ App }
      >
        <IndexRoute component={ Home } />
        <Route
          path="/template" component={ TemplateEdit }
        >
        </Route>
        <Route
          path="/template/:hash" component={ TemplateEdit }
        >
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)