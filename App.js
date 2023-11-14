import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigation from './assets/components/navigation/AppNavigation';
import { BACKGROUND_COLOR } from './assets/graphics/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});
