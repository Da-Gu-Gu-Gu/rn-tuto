import 'react-native-gesture-handler';
import React from 'react'
import Navs from './src/navigation/Navs';
import { AuthContextProvider } from './src/context/AuthContext';




const App = () => {



  return (

    <AuthContextProvider >
      <Navs />
    </AuthContextProvider>
 
  )
}

export default App






