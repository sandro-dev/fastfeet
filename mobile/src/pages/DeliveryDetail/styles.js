import styled from 'styled-components/native';

import Text from '~/components/Text';
import BgComponent from '~/components/Background';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Background = styled(BgComponent)`
  height: 155px;
`;
export const ContentContainer = styled.View`
  margin-top: -90px;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  background: #fff;
  margin: 0 20px 10px 20px;
  padding: 15px 30px 0 15px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const CardContainer = styled.View``;

export const CardColumns = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled(Text)`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CardLabel = styled(Text)`
  color: #999;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardInfo = styled(Text)`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const Status = styled(CardInfo)`
  text-transform: capitalize;
`;

export const Actions = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  margin: 0 20px;
  height: 83px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const Action = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
`;

export const ActionTitle = styled(Text)`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
