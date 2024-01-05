import { StyleSheet, View, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { BACKGROUND_COLOR } from '../../graphics/Colors';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import PMTLogo from '../../image/PMTLogo.png';
import { auth } from '../../database/config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = ({navigation}) => {

  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('testtest');

  const signIn = ()=>{

    console.log('pressed SignIn');
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log('User current', userCredential);
        const user = userCredential.user;
        // ...
        navigation.navigate('NavBar');
      })
      .catch((error) => {
        console.log('Error login user', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors here
      });
  }

  return (
    
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        
        <View style={styles.logoContainer}>
          <Image source={PMTLogo} style={styles.logo}/>
        </View>

        <CustomInput
        inputTitle="E-mail address"
        value={email}
        setValue={(email)=>{setEmail(email)}}
        />
        <CustomInput
        inputTitle="Password"
        value={password}
        setValue={(password)=>{setPassword(password)}}
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            text="Login"
            onPress={signIn}
            width={200}
            />   
        </View>
        
          
          
        
      </ScrollView>
    </KeyboardAvoidingView>
    
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

  buttonContainer:{
    alignItems:'center',
  }

  

});

export default SignIn