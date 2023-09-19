import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { BACKGROUND_COLOR } from '../graphics/Colors';
import CustomButton from '../components/customButton/CustomButton';

const Event = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Event</Text>
      <CustomButton
      text="Register to the event"
      onPress={() => navigation.navigate('AddFighter')}
      />
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

export default Event