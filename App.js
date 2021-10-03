import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { addUser } from './Api/api';
import IncidentList from './screens/IncidentList';
export default function App() {
  addUser(); 
  return (
    <View style={styles.container}>
      <IncidentList />
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
