import axios from 'axios';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/ListItem';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

interface Item {
  contexto: string;
  token: string;
  urlLogoContexto: string;
  nomeAplicacao: string;
}

const Home: React.FC = () => {
  const { conteudo } = useAuth();

  const handleAcessSchool = useCallback(async (item: Item) => {
    try {
      const response = await axios.post(
        `https://${item.contexto}/api/mensagem/ultimas-noticias/v3`,
        {},
        {
          headers: {
            'X-Authorization': `${item.token}`,
          },
        },
      );
      console.log(response);
    } catch (error) {
      if (error.response) console.log(error.response.data);
      else {
        console.log(error.message);
      }
    }
  }, []);

  return (
    <Container>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <ListItem item={item} onPress={() => handleAcessSchool(item)} />
        )}
        data={conteudo}
      />
    </Container>
  );
};

export default Home;
