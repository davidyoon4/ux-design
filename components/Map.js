import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';
import TopBar from './molecules/TopBar';
import Setting from './molecules/Setting';

class Map extends React.Component{
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
        <TopBar title='IKEA Desk' left='Back' right='       '/>
        <View>
          <View style={GlobalStyles.styles.row}>
            {tableRow}
          </View>
        </View>
        
        <View style={localStyles.pickup}>
        <Text style={localStyles.pickupText}>Pickup from Home</Text>
        <Text style={localStyles.pickupText}>4:21pm</Text>
        </View>


        <Image style={localStyles.map} source={require('../images/maps/full.png')}/>
        
        <BottomBar active='location' changeScreen={this.props.changeScreen}/>
      </View>
      );
  }
}

export default Map;
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
        height: 400
    },
    pickup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pickupText:{
        fontSize: 18,
        marginHorizontal: 10
    }
  });
