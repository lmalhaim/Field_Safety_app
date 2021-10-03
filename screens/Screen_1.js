import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Screen_1 = () => (
  <View style={styles.container}>
    <Text style={styles.title}>User's Equipments</Text>
    <Image source='./../assets/conocoLogo.jpg' style={styles.logo}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 36,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 6,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 117,
    height: 108,
    marginBottom: 55.5,
    marginTop: 30,
  },
});

export default Screen_1;