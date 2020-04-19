import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  margin-top: 25px;
`;

export const Progress = styled.View`
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Ball = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${(props) => (props.marked ? '#7d40e7' : '#fff')};
  border: 1px solid #7d40e7;
`;

export const Line = styled.View`
  height: 1px;
  flex: 1;
  background: #7d40e7;
`;

export const DescriptionStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`;

export const Status = styled(Text)`
  font-size: 10px;
  color: #999;
  text-align: center;
  width: 55px;
`;
