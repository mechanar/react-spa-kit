import React from 'react';

import PropTypes from 'prop-types';

import App from 'components/App';

const MainPage = props => {
  const { info, getAppData } = props;
  const { useEffect } = React;
  useEffect(() => {
    getAppData();
  }, [getAppData]);
  return <App warning big info={info} />;
};

MainPage.propTypes = {
  info: PropTypes.string.isRequired,
  getAppData: PropTypes.func.isRequired
};

export default MainPage;
