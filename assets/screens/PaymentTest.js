import { View, Text, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../components/customButton/CustomButton';
import { useStripe } from '@stripe/stripe-react-native';
import { collection } from 'firebase/firestore';
import { db } from '../database/config';


const PaymentTest = () => {
  const [loading, setLoading] = useState(false);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const openPaymentSheet = async () => {
    console.log('pressed');
  };

  const handleCheckout = async () => {
    console.log('pressed');

    setLoading(true);

    // Replace with the current user's UID
    const uid = 'user1';

    // Create a new Checkout session
    const checkoutSessionRef = await db
      .collection('customers')
      .doc(uid)
      .collection('checkout_sessions')
      .add({
        client: 'mobile',
        mode: 'payment',
        amount: 30, // Replace with the payment amount
        currency: 'usd', // Replace with the currency code
      });

    // Wait for the Checkout session to be updated with the paymentIntentClientSecret
    const checkoutSessionSnapshot = await checkoutSessionRef.get();
    const { paymentIntentClientSecret, ephemeralKeySecret, customer } = checkoutSessionSnapshot.data();

    // Initialize the payment sheet
    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKeySecret,
      paymentIntentClientSecret,
    });

    if (!error) {
      // Present the payment sheet
      const { error: paymentError } = await presentPaymentSheet({ clientSecret: paymentIntentClientSecret });

      if (paymentError) {
        alert(`Error code: ${paymentError.code}, Error message: ${paymentError.message}`);
      } else {
        alert('Success, your order is confirmed!');
      }
    }

    setLoading(false);
  };
  

  return (
    <View>
      <CustomButton
        text="Photo"
        onPress={openPaymentSheet}/>
      <CustomButton
        text="Pay"
        onPress={handleCheckout}/>
    </View>
  )
};

export default PaymentTest