import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as GlobalStyles from '../globalStyles';

class SignIn extends React.Component {
  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <View style={localStyles.container}>
        <Text style={GlobalStyles.styles.title}>Sign In</Text>
        <View style={localStyles.formContainer}>
          <TextInput style={GlobalStyles.styles.input} placeholder="NU Email" />
          <TextInput style={GlobalStyles.styles.input} placeholder="Password" />
        </View>
        <TouchableOpacity style={GlobalStyles.styles.buttonPrimary}>
          <Text style={GlobalStyles.styles.buttonPrimaryText} onPress={() => this.props.changeScreen('inventory')}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 0.25
  }
});
