import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigation from './assets/components/navigation/AppNavigation';
import { BACKGROUND_COLOR } from './assets/graphics/Colors';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51OKWmoJHIzdYNOasortr0alghBomI6SwA7PehACTg6EscWGcOf28bkkWNIwT6UI0iA7c4NrdiN3VCKnzSBFEPzJZ00UZST6SZx">
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});
