import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'state/store';
import Router from './Router';

render(
  <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

module.hot.accept();
