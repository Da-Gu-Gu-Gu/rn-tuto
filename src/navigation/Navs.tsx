import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Navs = () => {
    const [authorise,setAuthorise]=React.useState<Boolean>(false)
    const auth=useContext(AuthContext)

    React.useEffect(()=>{
  
     (async () => { 
    try {
    
      
      const value = await AsyncStorage.getItem('token')
    
      if(value !== null) {
         
          setAuthorise(true)
    
      }else{
        setAuthorise(false)
      }
    } catch(e) {
 
    }
  })()

  
    },[auth.auth])
  return (
    <NavigationContainer>
        {authorise?<HomeStack />:<AuthStack />}
    </NavigationContainer>
  )
}

export default Navs

