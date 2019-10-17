import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import MainPage from 'pages/MainPage';

import store, { history } from 'state/store';

const Router = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default Router;
