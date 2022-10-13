import { StyleSheet, View} from 'react-native'
import React, { useContext } from 'react'
import Onboarding  from 'react-native-onboarding-swiper'
import onboarding from '../constants/onboarding'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {

    const navigation=useNavigation()

  return (
    <View style={styles.onboarding}>
    <Onboarding
    onSkip={()=>navigation.replace("login")}
    onDone={()=>navigation.navigate("login")}
    pages={onboarding}
    />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    onboarding:{
        flex:1
    }
})