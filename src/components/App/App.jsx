import React from 'react';
import PropTypes from 'prop-types';
import S from './App.styles';

export default function App(props) {
  const { warning, big, getAppData, info } = props;
  const { useEffect } = React;
  useEffect(() => {
    getAppData();
  }, [getAppData]);
  return (
    <S.Application warning={warning} big={big}>
      {info}
    </S.Application>
  );
}

App.defaultProps = {
  warning: false,
  big: false
};

App.propTypes = {
  warning: PropTypes.bool,
  big: PropTypes.bool,
  getAppData: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired
};
