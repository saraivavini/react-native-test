import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  padding: 0 8px;
  background: transparent;
  border-width: 1px;
  border-color: #fff;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  background: transparent;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
