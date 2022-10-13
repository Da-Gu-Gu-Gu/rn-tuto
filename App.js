import {StyleSheet} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AuthContext, {AuthProvider} from './src/context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './src/components/Navigation/ScreenStack';
import AuthStack from './src/components/Navigation/AuthStack';
import Onboarding from './src/screens/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isNew, setIsNew] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getData = () => {
      AsyncStorage.getItem('alreadyLaunched').then(x => {
        if (x === null) {
          AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsNew(true);
        } else {
          setIsNew(false);
        }
      });
      AsyncStorage.getItem('token').then(x => {
        if (x !== null) {
          setToken(x);
        }
      });
    };
    getData();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        {isNew ? <Onboarding /> : token ? <ScreenStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
