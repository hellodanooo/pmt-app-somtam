import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Font from '../../graphics/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileInfo = ({icon, listInfo}) => {

  

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name={icon} size={60} color='white'/>
      </View>
      <View style={styles.text}> 
      {listInfo.map((item, index) => (
        <Text key={index} style={Font.infoText}>
          {item}
        </Text>
      ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection:'row',
    width: 210,
    justifyContent: 'flex-start',
    marginVertical: 30,
    
  },

  icon:{
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 15,
  },

  text:{
    justifyContent: 'center',
    alignItems:'flex-start',
  },

  
});

export default ProfileInfo