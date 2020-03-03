import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
