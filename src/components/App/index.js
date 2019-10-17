import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appAction } from 'state/App';
import App from './App';

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
)(App);
