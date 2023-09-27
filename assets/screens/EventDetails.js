import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { BACKGROUND_CARD_COLOR, BACKGROUND_COLOR } from '../graphics/Colors';
import CustomButton from '../components/customButton/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import EventInfo from '../components/event/EventInfo';
import { doc, getDoc } from "firebase/firestore";
import { db} from '../database/config';

const EventDetails = ({route, navigation}) => {

  const [eventData, setEventData] = useState(null);

  const eventId = "4N7ZUGKcxZuh6UiJ8XAX";

  const { id } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "events", id);
      const docSnap = await getDoc(docRef); // Use await to wait for the result

      if (docSnap.exists()) {
        const data = docSnap.data();
        const dateString = data.date.toDate().toLocaleString();
        data.date = dateString;
        setEventData(data); 
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
    }, []
  );


  return (
    <ScrollView>
      {eventData ? (
      <>
      <SafeAreaView style={styles.container}>
          <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri:eventData.flyer}}
          />
          </View>
          <View style={styles.eventInfoContainer}>
            <EventInfo
            icon={'calendar-range'}
            listInfo={[eventData.date]}
            />
            <EventInfo
            icon={'clock-outline'}
            listInfo={[eventData.weighin_time]}
            />
            <EventInfo
            icon={'map-marker'}
            listInfo={[eventData.address]}
            />
          </View>
          
          <CustomButton
          text="Register to the event"
          onPress={() => navigation.navigate('AddFighter')}
          />
        
      </SafeAreaView>

      </>
    ) : (
      <Text>Loading...</Text>
    )}
    </ScrollView>
    
  )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_CARD_COLOR,
    alignItems: 'center',
    paddingTop:30,
    paddingBottom:90,
    
  },
  
  image:{
    height: 510,
    width: width,
    
  },

  
});

export default EventDetails