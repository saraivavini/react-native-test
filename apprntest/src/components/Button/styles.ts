import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #fff;
  margin-top: 24px;
  padding: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: blue;
  font-size: 18px;
`;
