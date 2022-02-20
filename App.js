import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './components/Header'
import Start from './Screens/Start'

const App = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <Start />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#48cae4'
  }
})

export default App