import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddFighterScreen from './assets/screens/addFighterScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <AddFighterScreen/>
      <Text>sisi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
