import { StyleSheet, TextInput, View, Text } from 'react-native';
import React from 'react';
import Font from '../../graphics/Fonts';
import { BACKGROUND_CARD_COLOR, TEXT_MAIN_COLOR } from '../../graphics/Colors';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, inputTitle}) => {
  return (
    <View style = {styles.container}>
      <Text
      style = {Font.input_title}
      >{inputTitle}</Text>
      <TextInput
      placeholder= {placeholder}
      value = {value}
      onChangeText = {setValue}
      style = {styles.Input}
      secureTextEntry = {secureTextEntry}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 30,
      marginVertical:15,
    },

    Input: {
      color: TEXT_MAIN_COLOR,
      backgroundColor: BACKGROUND_CARD_COLOR,
      borderRadius:9,
      paddingHorizontal: 9,
      paddingVertical: 3,
      
    },

    

})