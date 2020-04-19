import { RNCamera } from 'react-native-camera';

import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.View`
  background: #7d40e7;
  height: 155px;
`;
export const Content = styled.View`
  flex: 1;
  margin: -60px 20px 0 20px;
`;

export const CameraView = styled.View`
  width: 100%;
  height: 80%;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PreviewPhoto = styled.Image`
  flex: 1;
`;

export const ButtonCapture = styled.TouchableOpacity`
  width: 61px;
  height: 61px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

export const ButtonSend = styled(Button)`
  background: #7d40e7;
  margin: 15px 0 15px 0;
`;
