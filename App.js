import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import AddFighter from './assets/screens/AddFighter';
import UserScreen from './assets/screens/UserScreen';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from './assets/components/config';

export default function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function create(){
    setDoc(doc(db, "Fighters", "LA"), {
      first_name:firstName,
      last_name: lastName,
    }).then(()=>{
      console.log('data submitted');
    }).catch((error)=>{
      console.log(error);
    });
  }
  

  const handleSubmit = ()=>{
    console.log('pressed')
  }

  return (
    <View style={styles.container}>
      {/* <AddFighter/>
      <Text>sisi</Text> */}
      <UserScreen/>
      <TextInput valuer={firstName} onChangeText={(firstName)=>{setFirstName(firstName)}} placeholder='Firstname' style={styles.textBoxes}></TextInput>
      <TextInput valuer={lastName} onChangeText={(lastName)=>{setFirstName(lastName)}} placeholder='Lastname' style={styles.textBoxes}></TextInput>
      <Pressable onPress={create}><Text>submit</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBoxes:{
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor:'grey',
    borderWidth:0.2,
    borderRadius:10,

  }
});
