import styled, { css } from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const WelcomeContainer = styled.View`
  margin: 20px 10px;
`;

export const WelcomeMessage = styled(Text)`
  color: #666;
`;

export const WelcomeName = styled(Text)`
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const BtnSignout = styled(BaseButton)`
  background: #fff;
  padding: 12px 20px;
  border-radius: 4px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const PageTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const Filters = styled.View`
  flex-direction: row;
`;

export const BtnFilter = styled(BaseButton)`
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  color: ${(props) => (props.isActive ? '#7d40e7' : '#999')};
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
`;

export const BtnFilterText = styled.Text`
  color: ${(props) => (props.isActive ? '#7d40e7' : '#999')};
  font-weight: bold;
`;

export const Feed = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
