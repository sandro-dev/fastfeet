import styled from 'styled-components/native';

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  padding: 12px 20px;
  min-height: 46px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #444;
`;
