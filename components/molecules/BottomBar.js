import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import * as GlobalStyles from '../../globalStyles';

class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    var truckIcon = this.props.active == 'truck' ? <Image source={require('../../icons/active/truck.png')}/> : <Image source={require('../../icons/truck.png')}/>;
    var newIcon = this.props.active == 'new' ? <Image source={require('../../icons/active/new.png')}/> : <Image source={require('../../icons/new.png')}/>;
    var locationIcon = this.props.active == 'location' ? <Image source={require('../../icons/active/location.png')}/> : <Image source={require('../../icons/location.png')}/>;
    var scanIcon = this.props.active == 'scan' ? <Image source={require('../../icons/active/scan.png')}/> : <Image source={require('../../icons/scan.png')}/>;
    var profileIcon = this.props.active == 'profile' ? <Image source={require('../../icons/active/profile.png')}/> : <Image source={require('../../icons/profile.png')}/>;

    return (
      <View style={localStyles.bottomBar}>
          <TouchableOpacity onPress={() => this.props.changeScreen('inventory')}>{truckIcon}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.changeScreen('request')}>{newIcon}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.changeScreen('map')}>{locationIcon}</TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.changeScreen('scanner')}>{scanIcon}</TouchableOpacity>
          <TouchableOpacity>{profileIcon}</TouchableOpacity>
      </View>
    );
  }
}

export default BottomBar;
const localStyles = StyleSheet.create({
  bottomBar: {
    backgroundColor: GlobalStyles.colors.gray,
    height: 72,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
