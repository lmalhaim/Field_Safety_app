import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD

import { addUser } from './Api/api';
import IncidentList from './screens/IncidentList';
=======
import FirstScreen from "./assets/screens/first_screen.js";

>>>>>>> 233e03502d8945026605b49baaaca4294105043c
export default function App() {
  addUser(); 
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <IncidentList />
=======
      < FirstScreen />
      <StatusBar style="auto" />
>>>>>>> 233e03502d8945026605b49baaaca4294105043c
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
