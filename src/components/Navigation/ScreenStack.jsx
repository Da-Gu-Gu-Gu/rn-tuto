import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'

const Stack=new createNativeStackNavigator()

const ScreenStack = () => {
  return (
    <Stack.Navigator initialRoute={'home'}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}

export default ScreenStack

const styles = StyleSheet.create({})