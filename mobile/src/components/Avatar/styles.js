import styled from 'styled-components/native';

export const Image = styled.Image`
  width: ${(props) => (props.custom ? props.custom.size : 136)}px;
  height: ${(props) => (props.custom ? props.custom.size : 136)}px;
  background-color: #f4effc;
  border-radius: 68px;
  margin: 10px -10px 0 10px;
`;

export const Container = styled.View`
  background-color: #f4effc;
  width: ${(props) => (props.custom ? props.custom.size : 136)}px;
  height: ${(props) => (props.custom ? props.custom.size : 136)}px;
  border-radius: 68px;
`;

export const Icon = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #a28fd0;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: ${(props) => (props.custom ? props.custom.font : 60)}px;
`;
