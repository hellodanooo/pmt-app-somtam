import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import { BACKGROUND_COLOR } from '../graphics/Colors';
import EventListInfo from './../components/event/EventListInfo';
import { collection, getDocs } from "firebase/firestore";
import { db} from '../database/config';



const EventList = ({navigation}) => {

  const [listEvent, setListEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = collection(db, "events");
      const querySnapshot = await getDocs(docRef);
  
      const eventsData = [];
      querySnapshot.forEach((doc) => {
        eventsData.push({
          id: doc.id, // Use doc.id directly as the ID
          ...doc.data(),
        });
      });
  
      setListEvent(eventsData);
    };
  
    fetchData();
  }, []);

  const renderEvent = ({ item }) => {
    
    return (
      <EventListInfo
        title={item.event_name}
        location={item.address}
        event_image={item.flyer}
        navigation={navigation}
        eventId={item.id}
        
      />
    );
  };

  return (
    <ScrollView >
      <View style={styles.container}>
        <FlatList
          data={listEvent}
          renderItem={renderEvent}
          keyExtractor={item => item.id}
        />
      </View>
      
    </ScrollView>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:BACKGROUND_COLOR,
    paddingTop:30,
    paddingBottom:90,
  }
})

export default EventList