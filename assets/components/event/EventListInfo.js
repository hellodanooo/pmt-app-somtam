import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import React from 'react';
import { BACKGROUND_CARD_COLOR, TEXT_MAIN_COLOR } from '../../graphics/Colors';
import CustomButton from '../customButton/CustomButton';

const EventListInfo = ({title, location, date, event_image, navigation, eventId}) => {

  const handlePress = () => {
    navigation.navigate('EventDetails', { id: eventId }); // Pass checkId as a route parameter
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri:event_image}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoSection}>
        <View>
          <Text style={styles.eventTitle}>{title}</Text>
          <Text style={styles.eventText}>{location}</Text>
          <Text style={styles.eventText}>{date}</Text>
        </View>
        <CustomButton
        text={'Participate'}
        onPress={handlePress}/>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: BACKGROUND_CARD_COLOR,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 30,
    marginHorizontal:15,
    borderRadius: 15,
  },

  imageContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: 15,
  },

  image:{
    width:330,
    height: 420,
  },

  infoSection:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    paddingHorizontal:6,
    paddingVertical:12,
  },

  eventTitle:{
    fontSize:18,
    color:TEXT_MAIN_COLOR,
  },

  eventText:{
    fontSize:12,
    color:TEXT_MAIN_COLOR,
    width:100,
  },
})
export default EventListInfo