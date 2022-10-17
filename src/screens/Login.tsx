import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Input from '../components/Inputs/Input'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import AuthContext from '../context/AuthContext'





const Login = () => {
    const auth=useContext(AuthContext)


  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text>Login</Text>
      <Input />
      <Input />
      <PrimaryButton handler={()=>auth?.signin('aaa','123')} />
      <PrimaryButton handler={()=>auth?.signout('aaa','123')} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})