import React,{useState} from 'react'
import { View, Text, Button,Alert, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Colors } from '../components/Colors'


const Start = () => {
    const [selectValue,setSelectValue]=useState()
    const [sure,setSure]=useState(false)
    const [num,setNum]=useState()

    const inputHandler=(a)=>{
        setSelectValue(a.replace(/[^0-9]/g,''))
    }

    const reset=()=>{
        setSelectValue('')
        setSure(false)
        Keyboard.dismiss()
    }

    const confirm=(aa)=>{
        Keyboard.dismiss()
        const chooseNumber=parseInt(selectValue)
        if(isNaN(chooseNumber) || chooseNumber <=0 || chooseNumber>99){
            Alert.alert("Invalid Number!",
            "Number has to be a number between 1 and 99",
            [{text:'Okay',style:'destructive',onPress:reset}])
            return;
        }
        setSure(true)
        setNum(parseInt(selectValue))
        setSelectValue('')
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.wrap}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Start A New Game</Text>

                <View style={styles.game}>
                    <TextInput style={styles.input} 
                    blurOnSubmit
                    maxLength={2}
                    keyboardType='number-pad'
                    onChangeText={(a)=>inputHandler(a)}
                    value={selectValue}
                    />
                    <View style={styles.butwrap}>
                        <View style={styles.but1} >
                            <Button title='Reset' color={Colors.cancel} onPress={()=>reset()} />
                        </View>
                        <View style={styles.but2} >
                            <Button title='Confirm' color={Colors.confirm} onPress={()=>confirm(selectValue)}/>
                        </View>
                    </View>
                </View>

                {sure?(
                    <View style={styles.confirm}>
                        <Text style={styles.conText}>Your are confirmed Number : {num}</Text>
                    </View>
                ):null}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center'
    },
    input: {
        marginVertical: 30,
        borderWidth: 2,
        borderColor: '#560bad',
        borderRadius: 5,
        height: 50,
        padding: 15,
        textAlign:'center',
        width: 50
    },
    game: {
        marginTop: 30,
        width: '80%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#8eecf5',
        shadowOpacity: 1,
        shadowRadius: 3.84,
        shadowOffset: { widht: 5, height: 5 },
        elevation: 15,
    },
    butwrap: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    but1: {
        width: 100,
        height: 50,
        borderRadius: 10
    },
    but2: {
        width: 100,
        height: 50,
        borderRadius: 10
    },
    confirm:{
        marginTop:100,
        alignItems:'center'
    },
    conText:{
        fontSize:25,
        fontWeight:'bold',
    }
})

export default Start