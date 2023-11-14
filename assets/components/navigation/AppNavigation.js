import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from '../navBar/NavBar';
import AddFighter from '../../screens/AddFighter';
import EventDetails from '../../screens/EventDetails';
import Profile from '../../screens/Profile';
import CreateAccount from '../../screens/CreateAccount';
import EventList from '../../screens/EventList';
import ListFighters from '../../screens/ListFighters';




const AppNavigation = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer style={StyleSheet.container}>
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
        name = "EventList"
        component={EventList}
        />
        <Stack.Screen
        name = "EventDetails"
        component={EventDetails}
        />
        <Stack.Screen
        name = "CreateAccount"
        component={CreateAccount}
        />
        <Stack.Screen
        name = "Profile"
        component={Profile}
        />
        <Stack.Screen
        name = "AddFighter"
        component={AddFighter}
        />
        <Stack.Screen
        name = "ListFighters"
        component={ListFighters}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default AppNavigation