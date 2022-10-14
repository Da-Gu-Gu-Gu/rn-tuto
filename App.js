import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import AuthContext, {AuthProvider} from './src/context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import ScreenStack from './src/components/Navigation/ScreenStack';
import AuthStack from './src/components/Navigation/AuthStack';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
