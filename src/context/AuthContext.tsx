<<<<<<< HEAD
import {createContext, Dispatch, SetStateAction, useState} from 'react';
import React from 'react';

interface Auth {
  token: String | null;
  login: (name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<Auth>({} as Auth);
=======
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
>>>>>>> 5e17326bec447a23b014d72f295e6a0099c60681

interface Props {
  children: React.ReactNode;
}
const AuthContextProvider = ({children}: Props) => {
  const [token, setToken] = useState<String>('');

<<<<<<< HEAD
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
=======
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
>>>>>>> 5e17326bec447a23b014d72f295e6a0099c60681
    </AuthContext.Provider>
  );
};

export default AuthContext;
export {AuthContextProvider};
