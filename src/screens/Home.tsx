import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import AuthContext from '../context/AuthContext'

const Home = () => {
    const auth=useContext(AuthContext)
  return (
    <View>
      <PrimaryButton handler={()=>auth.signout('213','2323')}></PrimaryButton>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})