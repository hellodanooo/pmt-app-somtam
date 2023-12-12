import {Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Font from '../../graphics/Fonts'
import { BUTTON_COLOR } from '../../graphics/Colors'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[styles.container]}>
      <Text 
        style={[Font.button]}>{text}</Text>
    </Pressable>
  )
} 

const styles = StyleSheet.create({
  container: {
    
    
    padding: 15,
    marginVertical: 9,
    alignItems: 'center',
    borderRadius: 27,
    backgroundColor: BUTTON_COLOR,

  },

})

export default CustomButton