import React from 'react'
import {View,Text,StyleSheet,TouchableNativeFeedback} from 'react-native'

const styles=StyleSheet.create({
    flv:{
        padding:10,
        marginVertical:10,
        backgroundColor:'white',
        borderColor:'blue',
        borderWidth:1
    }
})

const Goal = (props) => {
  return (
      <TouchableNativeFeedback onPress={props.delete.bind(this,props.id)}>
    <View style={styles.flv}>
        <Text>{props.list}</Text>
    </View>
     </TouchableNativeFeedback>
  )
}

export default Goal