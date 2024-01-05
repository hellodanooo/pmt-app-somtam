import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { BACKGROUND_COLOR } from '../../graphics/Colors';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import PMTLogo from '../../image/PMTLogo.png';

const ConnectionPage = ({ navigation }) => {

  const SignIn = ()=>{
    navigation.navigate('SignIn');
  }

  const SignUp = ()=>{
    navigation.navigate('CreateAccount');
  }


  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image source={PMTLogo} style={styles.logo}/>
      </View>
      
      
        <CustomButton
          text="Login"
          onPress={SignIn}
          width={200}
          />

        <CustomButton
          text="Sign Up"
          onPress={SignUp}
          width={200}
          />            
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :BACKGROUND_COLOR,
    alignItems:'center',
    
  },

  logoContainer:{
    marginTop: 90,
    marginBottom: 30,
  },

  logo:{
    width: 300, // Or whatever size you want
    height: 300, // Or whatever size you want
    resizeMode: 'contain',
  },

  

  

});

export default ConnectionPage