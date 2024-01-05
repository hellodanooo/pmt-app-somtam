import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from '../../graphics/Fonts';
import { NAV_BAR } from '../../graphics/Colors';
import AddFighter from '../../screens/AddFighter';
import EventList from '../../screens/EventList';
import Profile from '../../screens/Profile';
import CreateAccount from '../../screens/authentication/CreateAccount';

const NavBar = () => {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator 
    initialRouteName='Event'
    labeled = {false}
    activeColor = 'red'
    inactiveColor='white'
   
    barStyle={{ 
      backgroundColor: NAV_BAR,
      position: 'absolute',
      
      }}>
        
        <Tab.Screen 
        name="Events" 
        component={EventList} 
        color = 'white'
        options={{ 
          tabBarIcon: () => (
          <View style = {styles.labelbox}>
          <MaterialCommunityIcons name='calendar-star' size={36} color='white'/>
          <Text style = {Font.label}>Event</Text>
          </View>
          ),
           }} />

        <Tab.Screen 
        name="Gym" 
        component={CreateAccount} 
        color = 'white'
        options={{ 
          tabBarIcon: () => (
          <View style = {styles.labelbox}>
          <MaterialCommunityIcons name='dumbbell' size={36} color='white'/>
          <Text style = {Font.label}>Gym</Text>
          </View>
          ),
           }} />
        
        <Tab.Screen 
        name="Ranking" 
        component={AddFighter} 
        color = 'white'
        options={{ 
          tabBarIcon: () => (
          <View style = {styles.labelbox}>
          <MaterialCommunityIcons name='chevron-triple-up' size={36} color='white'/>
          <Text style = {Font.label}>Ranking</Text>
          </View>
          ),
           }} />
           
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        color = 'white'
        options={{ 
          tabBarIcon: () => (
          <View style = {styles.labelbox}>
          <MaterialCommunityIcons name='account' size={36} color='white'/>
          <Text style = {Font.label}>Profile</Text>
          </View>
          ),
          }} />

        
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

  labelbox: {
    height: 50,
    width: '230%',
    alignItems:'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },

  icons: {
  width: 40,
  height: 40,
  },

})

export default NavBar