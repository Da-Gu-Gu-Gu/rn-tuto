import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface PROPS  {
    handler:()=>void
}

const PrimaryButton = ({handler}:PROPS) => {
  return (
    <Pressable style={styles.wrapper} onPress={handler}>
      <Text>Login</Text>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    wrapper: {
        width: '80%',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        backgroundColor: 'grey',
      },
})