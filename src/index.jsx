import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const title = 'React with Webpack and Babel';

// eslint-disable-next-line no-undef
ReactDOM.render(<App title={title} />, document.getElementById('app'));

module.hot.accept();
