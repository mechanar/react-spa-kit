import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { appAction } from 'state/MainPage';
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

const mapStateToProps = state => {
  return {
    info: state.appReducer.data
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAppData: appAction.getAppData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
