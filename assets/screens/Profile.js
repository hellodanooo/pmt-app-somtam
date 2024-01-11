import { View, Text,StyleSheet, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { BACKGROUND_COLOR } from '../graphics/Colors';
import ProfileInfo from '../components/profileInfo/ProfileInfo';
import CustomButton from '../components/customButton/CustomButton';
import { doc, getDoc } from "firebase/firestore";
import { db} from '../database/config';
import { logout } from '../database/config';
import { auth } from '../database/config';


const Profile = ({navigation}) => {

  const logout = ()=>{
    auth.signOut
    .then (()=>{
      navigation.navigate('ConnectionPage');
    })
    .catch(error => console.error('Sign Out Error:',error));
    
  };
  
  const [profileData, setProfileData] = useState(null);
  const [firsName, setFirstName]=useState();
  const [lastName, setLastName]=useState();
  const [gender, setGender]=useState();
  const [gym, setGym]=useState();
  const [weight, setWeight]=useState();
  const pmt_id = "AADYAVERMA1172006";
  const userEmail = auth.currentUser ? auth.currentUser.email : null;

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "profiles", pmt_id);
      const docSnap = await getDoc(docRef); // Use await to wait for the result

      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData(data); 
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
    }, []
  );
    

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>  
      <View >
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
            listInfo={[profileData.weightclass]}
          />
          <ProfileInfo
            icon={'karate'}
            listInfo={[profileData.win]}
          />
          <ProfileInfo
            icon={'chart-box'}
            listInfo={['1 win', '2 lost']}
          />
          <ProfileInfo
            icon={'email'}
            listInfo={[userEmail]}
          />
          
          
          <CustomButton
          text="logout"
          onPress={logout}
          />

        </>
      ) : (
        <Text>Loading...</Text>
      )}
      </View>
      
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    
  },

  container:{
    justifyContent:'center',
    alignItems: 'center',
    paddingBottom: 200,
  },
  
});

export default Profile