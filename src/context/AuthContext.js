import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
  storeData: (key, value) => {},
});

export default AuthContext;

export const AuthProvider = ({children}) => {
  const storeData = async (key, value) => {
    try {
      console.log(key, value);
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('err');
    }
  };

  const value = {
    storeData: storeData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
