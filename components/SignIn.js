import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import * as Styles from '../styles';
import * as GlobalStyles from '../globalStyles';
import Inventory from './Inventory';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: this.props.page }
  }

  inventory = () => {
    this.setState({
      page: 'inventory'
    })
  }

  render = () => {
    if (this.state.page == 'signIn'){
        return (
            <View style={localStyles.container}>
              <Text style={GlobalStyles.styles.title}>Sign In</Text>
              <View style={localStyles.formContainer}>
                <TextInput style={GlobalStyles.styles.input} placeholder="NU Email" />
                <TextInput style={GlobalStyles.styles.input} placeholder="Password" />
              </View>
              <TouchableOpacity style={GlobalStyles.styles.buttonPrimary}>
                <Text style={GlobalStyles.styles.buttonPrimaryText} onPress={this.inventory}>Sign In</Text>
              </TouchableOpacity>
            </View>
          );
    }
    if (this.state.page == 'inventory'){
        return (
            <Inventory />
        );
    }
  }
}

export default SignIn;
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 0.25
  }
});
