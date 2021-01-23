import React from 'react';
import { View } from 'react-native';

import { Container, Logo, Title, Context } from './styles';

interface Item {
  contexto: string;
  token: string;
  urlLogoContexto: string;
  nomeAplicacao: string;
}

interface IProps {
  item: Item;
  onPress(): void;
}

const ListItem: React.FC<IProps> = ({ item, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Logo source={{ uri: item.urlLogoContexto }} />
      <View>
        <Title>{item.nomeAplicacao}</Title>
        <Context>{item.contexto}</Context>
      </View>
    </Container>
  );
};

export default ListItem;
