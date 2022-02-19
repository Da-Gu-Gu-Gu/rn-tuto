import React,{useState} from 'react'
import { View,TextInput,Pressable,Text,StyleSheet,Modal ,Button} from 'react-native'



const styles=StyleSheet.create({
    inputView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:50,
      },
      input:{
          padding:10,
        borderRadius:5,
        height:60,
       width:'80%',
        backgroundColor:'hotpink'
      },
      aa:{
          marginTop:20,
        width:100,
        height:60,
        color:'white',
        backgroundColor:'cyan',
        alignItems:'center',
        justifyContent:'center'
      },
      text:{
        color:'white',
      },
})

const GoalInput = (props) => {
    const [input,setInput]=useState('')
  
  return (
      <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputView}>
        <TextInput style={styles.input} onChangeText={(text)=>setInput(text)} />
        <Button title='Cancel' color={'red'} onPress={props.cancel} />
        <Pressable style={styles.aa} onPress={()=>props.add(input)}>
        <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>
      </Modal>
  )
}

export default GoalInput