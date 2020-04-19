import styled from 'styled-components/native';
import Button from '~/components/Button';
import BgComponent from '~/components/Background';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  height: 155px;
  background: #7d40e7 !important;
`;

export const ContentContainer = styled.View`
  margin-top: -80px;
  margin-bottom: 20px;
`;

export const ContainerForm = styled.SafeAreaView`
  padding: 0 20px;
`;

export const Input = styled.TextInput`
  color: #999;
  font-size: 16px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  elevation: 1;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background-color: #7d40e7;
  align-self: stretch;
`;
