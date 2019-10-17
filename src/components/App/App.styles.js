import styled from 'styled-components';

const Application = styled.div`
  width: ${props => (props.big && '300px') || (props.small && '150px')};
  height: ${props => (props.big && '300px') || (props.small && '150px')};
  background-color: ${props =>
    (props.primary && 'blue') || (props.danger && 'red') || (props.warning && 'yellow')};
`;

export default { Application };
