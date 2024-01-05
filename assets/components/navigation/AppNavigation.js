import { Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer, useL } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConnectionPage from '../../screens/authentication/ConnectionPage';
import CreateAccount from '../../screens/authentication/CreateAccount';
import SignIn from '../../screens/authentication/SignIn';
import NavBar from '../navBar/NavBar';
import AddFighter from '../../screens/AddFighter';
import EventDetails from '../../screens/EventDetails';
import Profile from '../../screens/Profile';
import EventList from '../../screens/EventList';
import ListFighters from '../../screens/ListFighters';
import PaymentTest from '../../screens/PaymentTest';







const AppNavigation = () => {

  const Stack = createStackNavigator();

 
  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Success: 'success',
        Cancel: 'cancel',
        Failure: 'failure',
      },
    },
  };
 
 

  return (
    
    <NavigationContainer style={StyleSheet.container} linking={linking} fallback={<Text>Loading...</Text>} >
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
      >
        <Stack.Screen
        name = "ConnectionPage"
        component={ConnectionPage}
        />
        <Stack.Screen
        name = "SignIn"
        component={SignIn}
        />
        <Stack.Screen
        name = "CreateAccount"
        component={CreateAccount}
        />
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
        <Stack.Screen
        name = "PaymentTest"
        component={PaymentTest}
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