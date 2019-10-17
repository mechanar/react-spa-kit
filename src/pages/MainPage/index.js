import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appAction } from 'state/MainPage';

import MainPage from './MainPage';

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
