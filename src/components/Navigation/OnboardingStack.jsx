import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../../screens/Onboarding'

const Stack=new createNativeStackNavigator()

const OnboardingStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="onboarding" component={Onboarding} />
    </Stack.Navigator>
  )
}

export default OnboardingStack

const styles = StyleSheet.create({})