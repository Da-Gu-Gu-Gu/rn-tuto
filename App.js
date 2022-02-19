import React,{useState} from 'react'
import { StyleSheet,Pressable ,FlatList,Button,SafeAreaView} from 'react-native';
import Goal from './components/Goal';
import GoalInput from './components/GoalInput';


export default function App() {
  const [arr,setArr]=useState([])
  const [show,setShow]=useState(false)

  const add=(x)=>{
      setArr([...arr,x])
      setShow(false)
  }

  const removeArr=(i)=>{
    setArr(arr.filter((x,index)=>index!=i))
  }

  // const cancel()

  return (
    <SafeAreaView style={styles.container}>
      
      <Button title="Add Goal" onPress={()=>setShow(!show)}/>
      <GoalInput add={add} visible={show} cancel={()=>setShow(false)}/>

    <FlatList 
      data={arr}
      keyExtractor={(x,index)=>index}
      renderItem={(x)=>(<Goal list={x.item} id={x.index} delete={removeArr}/> )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
 
});
