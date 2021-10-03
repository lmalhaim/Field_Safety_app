import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen_3 from './screens/Screen_3'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { addUser } from './Api/api';
import IncidentList from './screens/IncidentList';
import EquipmentList from "./screens/EquipmentList";
import DocList from './screens/DocList'
import IncidentForm from './screens/reportIncident';


const Tab = createBottomTabNavigator(); 
export default function App() {
  addUser(); 
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Safety Documents" component={DocList} />
          <Tab.Screen name="Equipments" component={EquipmentList} />
          <Tab.Screen name="Incidents" component={IncidentList} />
          <Tab.Screen name="Report Incident" component={IncidentForm} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
