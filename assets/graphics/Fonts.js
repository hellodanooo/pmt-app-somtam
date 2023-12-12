import { StyleSheet } from 'react-native';
import { TEXT_MAIN_COLOR, BACKGROUND_CARD_COLOR } from './Colors';

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
    textAlign:'center',
  },

  infoFighter:{
    marginHorizontal: 9,
    marginVertical: 6,
    fontSize: 21,
    color: BACKGROUND_CARD_COLOR,
  }, 

  infoGym:{
    marginHorizontal: 9,
    marginVertical: 6,
    fontSize:15,
    color: BACKGROUND_CARD_COLOR,
  }


})

export default Font