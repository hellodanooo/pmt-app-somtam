import { StyleSheet } from 'react-native';
import { TEXT_MAIN_COLOR } from './Colors';

const Font = StyleSheet.create({
  title: {
    fontSize: 27,
    textAlign: "center",
    color: TEXT_MAIN_COLOR,
  },

  input_title:{
    padding: 6,
    color:TEXT_MAIN_COLOR,
    fontWeight: 'bold',
  },

  button:{
    fontSize: 15,
    fontWeight: 'bold',
    color: TEXT_MAIN_COLOR,
  },

  label:{
    fontSize:9,
    color: TEXT_MAIN_COLOR,
  },

  infoText:{
    fontSize: 18,
    color: TEXT_MAIN_COLOR,
  }


})

export default Font