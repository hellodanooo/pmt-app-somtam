import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Picker } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db} from '../database/config';
import { BACKGROUND_COLOR, BUTTON_COLOR } from '../graphics/Colors';
import Header from '../components/header/Header';
import CustomInput from '../components/customInput/CustomInput';
import CustomButton from '../components/customButton/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const AddFighter = ({navigation}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gym, setGym] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [fight, setFight] = useState('');

  function create(){
    console.log('bouton pressed');
    setDoc(doc(db, "Fighters", "TEST5"), {
      first_name:firstName,
      last_name: lastName,
      email: email,
      dob: dob,
      gym: gym,
      weight: weight,
      gender: gender,
      fight: fight,
    }).then(()=>{
      console.log('data submitted');
    }).catch((error)=>{
      console.log(error);
    });
  }
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
          <Header
          title="Create Your Profile"/>
        
          <CustomInput
          inputTitle="Firstname"
          value={firstName}
          setValue={(firstName)=>{setFirstName(firstName)}}
          />
          <CustomInput
          inputTitle="Lastname"
          value={lastName}
          setValue={(lastName)=>{setLastName(lastName)}}
          />
          <CustomInput
          inputTitle="Email"
          value={email}
          setValue={(email)=>{setEmail(email)}}
          />
          <CustomInput
          inputTitle="Date of birth"
          value={dob}
          setValue={(dob) => setDob(dob)}
          />

          <CustomInput
          inputTitle="Gym"
          value={gym}
          setValue={(gym)=>{setGym(gym)}}
          />
          <CustomInput
          inputTitle="Weight"
          value={weight}
          setValue={(weight)=>{setWeight(weight)}}
          /> 
          <CustomInput
          inputTitle="Gender"
          value={gender}
          setValue={(gender)=>{setGender(gender)}}
          /> 
          <CustomInput
          inputTitle="How many full contact amateur/pro fights?"
          value={fight}
          setValue={(fight)=>{setFight(fight)}}
          />    


          <View style={styles.buttonContainer}>
            <MaterialCommunityIcons 
            name='arrow-left' 
            size={36} 
            color= {BUTTON_COLOR}
            onPress={() => navigation.navigate('NavBar')}/>
            <CustomButton
            text="Create my profile"
            onPress={create}
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

export default AddFighter