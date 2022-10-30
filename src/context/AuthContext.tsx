import {createContext, Dispatch, SetStateAction, useState} from 'react';
import React from 'react';

interface Auth {
  token: String | null;
  login: (name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<Auth>({} as Auth);

interface Props {
  children: React.ReactNode;
}
const AuthContextProvider = ({children}: Props) => {
  const [token, setToken] = useState<String>('');

  const login = (name: string, password: string) => {
    setToken(name + password);
    // const async;
  };

  const logout = () => {
    console.log('logout');
  };

  const value = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export {AuthContextProvider};
