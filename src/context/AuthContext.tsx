import {useState, useContext, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ITodo {
  signin: (x:string,y:string) => void;
  signout: (s:string,y:string) => void;
  auth:Boolean
}

const AuthContext = createContext<ITodo>({
  signin:(x,y)=>{},
  signout:(x,y)=>{},
  auth:false
});

interface Props {
  children: React.ReactNode;
}

const AuthContextProvider = ({children}: Props) => {

  const [auth,setAuth]=useState<Boolean>(false)

  const value={
    signin:async (username: string, password: string) => {
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('token', 'token');
        setAuth((x)=>!x)
       
      } catch (e) {
        // saving error
      }
    },
    signout: async (username: string, password: string) => {
      try {
       
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('token');
        setAuth((x)=>!x)
      } catch (e) {
        // saving error
      }
    },


  }

  return <AuthContext.Provider value={{...value,auth}}>{children}</AuthContext.Provider>;
};
export default AuthContext;
export {AuthContextProvider};
