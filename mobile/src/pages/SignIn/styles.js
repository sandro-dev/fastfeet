import { Platform } from 'react-native';
import styled from 'styled-components/native';

import UnformInput from '~/components/UnInput';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const UnInput = styled(UnformInput)`
  margin-top: 37.5px;
  margin-bottom: 15.5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background-color: #82bf18;
  align-self: stretch;
`;
