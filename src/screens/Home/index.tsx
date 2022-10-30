import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../constants/theme'

const index = () => {
  return (
    <View style={styles.wrapper}>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:theme.color.primary
  }
})