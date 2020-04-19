import { BaseButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  height: 45px;
  background: #7d40e7;
  padding: 12px 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
