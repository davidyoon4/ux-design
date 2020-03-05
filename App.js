import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import TextInput from 'react-native';
import Welcome from './components/Welcome'
import { render } from 'react-dom';

export default function App() {
  var page = 'welcome';
  if (page == 'welcome') {
    return (
      <Welcome page={page}/>
    );
  }
  else {
    return (
      <Text>uh</Text>
    );
  }

}