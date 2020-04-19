import styled from 'styled-components/native';
import Text from '~/components/Text';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 36px;
`;

export const ProfileDetails = styled.View`
  width: 100%;
  padding-top: 40px;
`;

export const ProfileLabel = styled(Text)`
  font-size: 12px;
  color: #666;
`;

export const ProfileInfo = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  margin-bottom: 15px;
`;

export const BtnLogout = styled(Button)`
  background: #e74040;
  width: 100%;
  height: 40px;
  margin-top: 15px;
`;
