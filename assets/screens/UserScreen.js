import { View, Text } from 'react-native';
import React from 'react';
import db from '../database/firebaseDb';
import { getFirestore } from "firebase/firestore";
import { app } from '../database/firebaseDb';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const UserScreen = () => {

  const db = getFirestore(app);

  /* const fetchData = async () => {
    const rosterRef = collection(db, 'events', 'taVt1buUzGIT95axkgrh', 'roster');
    const dataArray: RosterFighter[] = []; // Explicitly set the type here

    try {
      const querySnapshot = await getDocs(rosterRef);
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data() as RosterFighter); // Cast to RosterFighter if needed
      });
  
      console.log("Data received:", dataArray);
      setRoster(dataArray);
    } catch (error) {
      console.error(`Error fetching data from Firestore:`, error);
      // TODO: Display an error to users
    }
  }; */
  

  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  )
}

export default UserScreen