import {useState, createContext, Dispatch, SetStateAction} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Token = Dispatch<SetStateAction<String>>;
interface ITodo {
  signin: (x: string, y: string) => void;
  signout: (s: string, y: string) => void;
  token: String;
  setToken: Token;
}

const AuthContext = createContext<ITodo>({
  signin: (x, y) => {},
  signout: (x, y) => {},
  token: '',
  setToken: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AuthContextProvider = ({children}: Props) => {
  const [token, setToken] = useState<String>('');

  const value = {
    signin: async (username: string, password: string) => {
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('token', 'token');
        setToken('aesrer');
      } catch (e) {
        // saving error
      }
    },
    signout: async (username: string, password: string) => {
      try {
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('token');
        setToken('');
      } catch (e) {
        // saving error
      }
    },
  };

  return (
    <AuthContext.Provider value={{...value, token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
export {AuthContextProvider};
