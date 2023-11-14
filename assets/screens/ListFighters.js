import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { BACKGROUND_COLOR } from '../graphics/Colors';
import FighterCard from '../components/profileInfo/FighterCard';


const ListFighters = () => {

  return (
    <View style={styles.container}>
      <Text>ListFighters</Text>
      <FighterCard/>
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

export default ListFighters

