import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface IContextItem {
  id: number;
  contexto: string;
  token: string;
  urlLogoContexto: string;
  nomeAplicacao: string;
}

interface IAuthState {
  conteudo: IContextItem[];
}

interface ILoginCredentials {
  login: string;
  senha: string;
}

interface IAuthContext {
  conteudo: IContextItem[];
  signIn(credentials: ILoginCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const conteudo = await AsyncStorage.getItem('@RNTest:conteudo');

      if (conteudo) {
        setData({ conteudo: JSON.parse(conteudo) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ login, senha }: ILoginCredentials) => {
    const response = await api.post<IAuthState>('/Acesso/login', {
      login,
      senha,
    });

    const { conteudo } = response.data;

    await AsyncStorage.setItem('@RNTest:conteudo', JSON.stringify(conteudo));

    if (conteudo.length === 0) {
      throw new Error();
    }

    setData({ conteudo });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@RNTest:conteudo');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        conteudo: data.conteudo,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
