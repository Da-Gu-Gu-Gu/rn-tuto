import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {

    const aa=()=>{
        
     
            AsyncStorage.getAllKeys()
                .then(keys => AsyncStorage.multiRemove(keys))
                .then(() => alert('success'));
        
    }

  return (
    <Pressable style={{flex:1,alignItems:'center',justifyContent:'center'}} >
      <Button title='login' onPress={()=>aa()} />
    </Pressable>
  )
}

export default Login

const styles = StyleSheet.create({})