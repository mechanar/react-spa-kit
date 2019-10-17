import React from 'react';
import PropTypes from 'prop-types';
import S from './App.styles';

export default function App(props) {
  const { warning, primary, danger, big, small, info } = props;
  return (
    <S.Application warning={warning} primary={primary} danger={danger} big={big} small={small}>
      {info}
    </S.Application>
  );
}

App.defaultProps = {
  warning: false,
  primary: false,
  danger: false,
  big: false,
  small: false
};

App.propTypes = {
  warning: PropTypes.bool,
  big: PropTypes.bool,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  info: PropTypes.string.isRequired
};
