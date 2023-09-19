import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from '../navBar/NavBar';
import AddFighter from '../../screens/AddFighter';
import Event from '../../screens/Event';
import Profile from '../../screens/Profile';




const AppNavigation = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
      >
        <Stack.Screen
        name = "NavBar"
        component={NavBar}
        />
        <Stack.Screen
        name = "Event"
        component={Event}
        />
        <Stack.Screen
        name = "Profile"
        component={Profile}
        />
        <Stack.Screen
        name = "AddFighter"
        component={AddFighter}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation