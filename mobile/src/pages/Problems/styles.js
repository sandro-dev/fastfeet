import styled from 'styled-components/native';
import Text from '~/components/Text';
// import BgComponent from '~/components/Background';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled.SafeAreaView`
  height: 155px;
  background: #7d40e7;
`;

export const ContentContainer = styled.View`
  margin-top: -80px;
  margin-bottom: 20px;
`;

export const TitleContainer = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: -10px auto 10px auto;
`;

export const ProblemFeed = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const ProblemItem = styled.View`
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 1;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 10px 20px;
`;

export const ProblemDescription = styled.Text`
  color: #999;
  font-size: 16px;
  width: 200px;
`;

export const ProblemDate = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
