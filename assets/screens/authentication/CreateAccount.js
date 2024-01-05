import React, {useState} from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BACKGROUND_COLOR, BUTTON_COLOR } from '../../graphics/Colors';
import Header from '../../components/header/Header';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/* import { db } from '../../database/config';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; */
import { auth } from '../../database/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';




const CreateAccount = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = ()=>{
    console.log('pressed SignUp');
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      console.log('User created', userCredential);
      const user = userCredential.user;
      navigation.navigate('SignIn')
    })
    .catch((error) => {
      console.log('Error creating user', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  
  
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
          <Header
          title="Create Your Profile"/>
        
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
            <MaterialCommunityIcons 
            name='arrow-left' 
            size={36} 
            color= {BUTTON_COLOR}
            onPress={() => navigation.navigate('ConnectionPage')}/>
            <CustomButton
            text="Create my profile"
            onPress={signUp}
            />
          </View>
          <StatusBar style="auto" />
        
      </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :BACKGROUND_COLOR,
  },

  input: {
    paddingBottom: 18,
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center',
  },

  buttonContainer:{
    alignItems:'center',
    justifyContent:'space-between',
    display: 'flex',
    flexDirection:'row',
    marginHorizontal: 30,
  }

});

export default CreateAccount