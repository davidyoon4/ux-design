import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';
import TopBar from './molecules/TopBar';
import Setting from './molecules/Setting';

class Request extends React.Component{
  constructor(props){
    super(props);
  }


  render = () => {
    let tableRowpaths = [require('../images/1.png'),require('../images/2.png'),require('../images/3.png')];
    let tableRow = [];
    for (var i=0; i<tableRowpaths.length; i++){
      tableRow.push(
        <Image style={GlobalStyles.styles.image} source={tableRowpaths[i]}/>
      )
    }
      return (
        <View style={localStyles.container}>
        <TopBar title='IKEA Desk' left='Back' right='Submit'/>
        <View>
          <View style={GlobalStyles.styles.row}>
            {tableRow}
          </View>
        </View>
        
        <View style={localStyles.settingsContainer}>
        <Setting title="Seller" info="David Yoon"/>
        <Setting title="Description" info="this is a desk..."/>
        <Setting title="Price" info="$50"/>
        <Setting title="Negotiable" switch/>
        <Setting title="Expiration Date" info="Aug 7"/>
        </View>


        <Image style={localStyles.map} source={require('../images/maps/partial.png')}/>
        
        <BottomBar active='new' changeScreen={this.props.changeScreen}/>
      </View>
      );
  }
}

export default Request;
const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.gray,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    row: {
        flexDirection: 'row'
      },
      image:{
        backgroundColor: 'pink',
        width: 100,
        height: 100,
        marginHorizontal: 5,
        marginVertical: 5
      },
    map:{
        height: 150
    },
    settingsContainer: {
        width: '100%'
    }
  });
