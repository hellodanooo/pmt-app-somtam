import { View, Text,StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import { BACKGROUND_COLOR } from '../graphics/Colors';
import ProfileInfo from '../components/profileInfo/ProfileInfo';
import { doc, getDoc } from "firebase/firestore";
import { db} from '../database/config';

const Profile = () => {

  const [profileData, setProfileData] = useState(null);
  const [firsName, setFirstName]=useState();
  const [lastName, setLastName]=useState();
  const [gender, setGender]=useState();
  const [gym, setGym]=useState();
  const [weight, setWeight]=useState();
  const fighterID = "00gAsU4OZgB1LOt9t9UV";

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Fighters", fighterID);
      const docSnap = await getDoc(docRef); // Use await to wait for the result

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", data);
        setProfileData(data); 
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
    }, []
  );
    

  return (
    <View style={styles.container}>  
      {profileData ? (
      <>
        <ProfileInfo
          icon={'information'}
          listInfo={[profileData.first, profileData.last, profileData.dob, profileData.gender]}
        />
        <ProfileInfo
          icon={'dumbbell'}
          listInfo={[profileData.gym]}
        />
        <ProfileInfo
          icon={'scale'}
          listInfo={[profileData.weight_class]}
        />
        <ProfileInfo
          icon={'karate'}
          listInfo={[profileData.win]}
        />
        <ProfileInfo
          icon={'chart-box'}
          listInfo={['1 win', '2 lost']}
        />
      </>
    ) : (
      <Text>Loading...</Text>
    )}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile