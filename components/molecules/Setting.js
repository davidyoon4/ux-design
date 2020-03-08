import React from 'react';
import { Text,StyleSheet, View, Image, Switch } from 'react-native';
import * as GlobalStyles from '../../globalStyles';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state={switchValue: true}
  }

  render = () => {
    let imagePaths = new Map();
    imagePaths.set('Seller', require('../../icons/settings/seller.png'));
    imagePaths.set('Description', require('../../icons/settings/description.png'));
    imagePaths.set('Price', require('../../icons/settings/price.png'));
    imagePaths.set('Negotiable', require('../../icons/settings/negotiable.png'));
    imagePaths.set('Expiration Date', require('../../icons/settings/expiration.png'));

    let info;
    if (this.props.switch){
        info = (        
            <Switch value={this.state.switchValue} onValueChange={() => this.setState({switchValue: !this.state.switchValue})}/>
        )
    }
    else{
        info = (
            <Text style={localStyles.info}>{this.props.info}</Text>
        )
    }
    return (
      <View style={localStyles.setting}>
          <View style={localStyles.row}>          
            <Image style={localStyles.icon}source={imagePaths.get(this.props.title)}/>
            <Text style={localStyles.title}>{this.props.title}</Text>
          </View>
        {info}
      </View>
    );
  }
}

export default Setting;
const localStyles = StyleSheet.create({
    setting: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderColor: GlobalStyles.colors.gray
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 15
    },
    title: {
        fontSize: 18
    }
});
