import React from 'react';
import { Text,StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import * as GlobalStyles from '../../globalStyles';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <View style={localStyles.topBar}>
          <TouchableOpacity><Text style={localStyles.topBar__item}>{this.props.left}</Text></TouchableOpacity>
          <TouchableOpacity><Text style={localStyles.topBar__title}>{this.props.title}</Text></TouchableOpacity>
          <TouchableOpacity><Text style={localStyles.topBar__item}>{this.props.right}</Text></TouchableOpacity>
      </View>
    );
  }
}

export default TopBar;
const localStyles = StyleSheet.create({
  topBar: {
    backgroundColor: '#E5E5E5',
    height: 70,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 20
  },
  topBar__item: {
      fontSize: 17,
      marginHorizontal: 15,
      color: GlobalStyles.colors.blue,
      marginBottom: 5
  },
  topBar__title: {
      fontSize: 24,
      marginBottom: 5
  }
});
