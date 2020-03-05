import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import * as Styles from '../styles';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: this.props.page }
  }

  createAcc = () => {
    this.setState({
      page: 'createAcc'
    })
  }

  render = () => {
    return (
      <View style={localStyles.container}>
        <BottomBar active='truck'/>
      </View>
    );
  }
}

export default Inventory;
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 0.65
  }
});
