import React from 'react';
import { Text, StyleSheet, View, Image, Switch } from 'react-native';
import * as GlobalStyles from '../../globalStyles';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchValue: true }
  }

  render() {
    if (!this.props.switch) {
      return (
        <View style={localStyles.field}>
          <Text style={localStyles.fieldTitle}>{this.props.fieldTitle}</Text>
          <Text style={localStyles.fieldInfo}>{this.props.fieldInfo}</Text>
        </View>
      );
    }
    else {
      return (
        <View>
          <Text style={localStyles.fieldTitle}>{this.props.fieldTitle}</Text>
          <View style={localStyles.notifContainer}>
            <Text style={localStyles.fieldInfo}>{this.props.fieldInfo}</Text>
            <Switch value={this.state.switchValue} onValueChange={() => this.setState({ switchValue: !this.state.switchValue })} />
          </View>
        </View>

      );
    }

  }
}

export default Field;
const localStyles = StyleSheet.create({
  fieldTitle: {
    color: '#848484',
    fontSize: 16,
    paddingLeft: 20,
    marginTop: 8,
    alignSelf: 'stretch'
  },
  fieldInfo: {
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 8
  },
  field: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.gray
  },
  notifContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15
  },
});
