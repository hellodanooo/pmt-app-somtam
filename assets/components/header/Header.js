import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Font from '../../graphics/Fonts';

const Header = ({title}) => {
  return (
    <View style = {styles.upsection}>

        <View>
            <Text style = {Font.title}>{title}</Text>
        </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  upform:{
    marginTop:60,
  },

  upsection: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:60,
    marginBottom: 9,
    paddingHorizontal: 30,
    
    
  },
  

});