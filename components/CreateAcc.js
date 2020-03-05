import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import * as GlobalStyles from '../globalStyles';
import Inventory from './Inventory';

class CreateAcc extends React.Component {
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
    if (this.state.page == 'createAcc') {
      return (
        <View style={localStyles.container}>
          <Text style={GlobalStyles.styles.title}>Sign Up</Text>
          <View style={localStyles.formContainer}>
            <TextInput style={GlobalStyles.styles.input} placeholder="Name" />
            <TextInput style={GlobalStyles.styles.input} placeholder="NU Email" />
            <TextInput style={GlobalStyles.styles.input} placeholder="Password" />
            <TextInput style={GlobalStyles.styles.input} placeholder="Confirm Password" />
            <TextInput style={GlobalStyles.styles.input} placeholder="General Location" />
          </View>
          <TouchableOpacity style={GlobalStyles.styles.buttonPrimary}>
            <Text style={GlobalStyles.styles.buttonPrimaryText} onPress={this.inventory}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    }
    else if (this.state.page == 'inventory') {
      return (
        <Inventory />
      );
    }

  }
}

export default CreateAcc;
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 0.65
  }
});
