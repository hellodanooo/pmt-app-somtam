import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TEXT_MAIN_COLOR, BACKGROUND_CARD_COLOR, BUTTON_COLOR } from '../../graphics/Colors';
import Font from '../../graphics/Fonts';

const FighterCard = ({FirstName, LastName, GymName}) => {
  return (
    <View style ={styles.container}>
      <View style = {styles.infoFighterContainer}>
        <Text style = {Font.infoFighter}>{FirstName}</Text>
        <Text style = {Font.infoFighter}>{LastName}</Text>
      </View>
      <Text style = {Font.infoGym}>{GymName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: TEXT_MAIN_COLOR,
    borderColor: BUTTON_COLOR,
    borderWidth: 2,
    borderRadius: 15,
    marginHorizontal: 12,
    marginVertical: 6,
  },

  infoFighterContainer:{
    display: 'flex',
    flexDirection: 'row',
    
  },

 
})

export default FighterCard