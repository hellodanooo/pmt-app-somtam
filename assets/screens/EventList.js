import { View, Text, ScrollView, StyleSheet, FlatList, RefreshControl } from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import { BACKGROUND_COLOR } from '../graphics/Colors';
import EventListInfo from './../components/event/EventListInfo';
import { collection, getDocs } from "firebase/firestore";
import { db} from '../database/config';



const EventList = ({navigation}) => {

  const [listEvent, setListEvent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const docRef = collection(db, 'events');
      const querySnapshot = await getDocs(docRef);

      const eventsData = [];
      querySnapshot.forEach((doc) => {
        eventsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setListEvent(eventsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const renderEvent = ({ item }) => {
    
    return (
      <EventListInfo
        title={item.event_name}
        location={item['address']}
        event_image={item['address']}
        navigation={navigation}
        eventId={item.id}
      />
    );
  };

  return (
    
      <View style={styles.container}>
        <FlatList
          data={listEvent}
          renderItem={renderEvent}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
      
    
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:BACKGROUND_COLOR,
    paddingTop:30,
    paddingBottom:90,
  }
})

export default EventList