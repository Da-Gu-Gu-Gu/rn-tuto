import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header = () => {
  return (
        <View style={styles.header}>
            <Text style={styles.text}>Hello</Text>
        </View>
  )
}

const styles=StyleSheet.create({
    header:{
        padding:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#023e8a'
    },
    text:{
        color:'white',
        letterSpacing:3,
        fontWeight:'bold',
        fontSize:25
    }
})

export default Header