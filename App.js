import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { addUser } from './Api/api';
import IncidentList from './screens/IncidentList';
import FirstScreen from "./screens/first_screen";


const Tab = createBottomTabNavigator(); 
export default function App() {
  addUser(); 
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen tabBarIcon = {""} name="Equipments" component={FirstScreen} />
          <Tab.Screen name="Incidents" component={IncidentList} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
