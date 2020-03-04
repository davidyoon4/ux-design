import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import TextInput from 'react-native';

var primaryColor = '#4A9C2D';
export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonPrimaryText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonSecondaryText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25
  },
  buttonPrimary:{
    backgroundColor:'white',
    borderRadius:15,
    paddingTop:10,
    paddingBottom:10,
    marginTop:10,
  },
  buttonPrimaryText:{
    fontWeight: "bold",
    color: primaryColor,
    textAlign:'center',
    paddingLeft : 15,
    paddingRight : 15
  },
  buttonSecondary:{
    backgroundColor: 'transparent',
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop:10,
    paddingBottom:10,
    marginTop:10,
  },
  buttonSecondaryText:{
    fontWeight: "bold",
    color: 'white',
    textAlign:'center',
    paddingLeft : 15,
    paddingRight : 15
  },
});
