import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';
import TopBar from './molecules/TopBar';

class Map extends React.Component{
  constructor(props){
    super(props);
  }


  render = () => {
    let tableRowpaths = [require('../images/7.png'),require('../images/2.png'),require('../images/3.png')];
    let tableRow = [];
    for (var i=0; i<tableRowpaths.length; i++){
      tableRow.push(
        <Image style={GlobalStyles.styles.image} source={tableRowpaths[i]}/>
      )
    }
      return (
        <View style={localStyles.container}>
        <TopBar title='IKEA Desk' left='Back' right='             '/>
        <View>
          <View style={GlobalStyles.styles.row}>
            {tableRow}
          </View>
        </View>
        
        <View style={localStyles.pickup}>
        <Text style={localStyles.pickupText}>Pickup from: <Text style={localStyles.bold}>Home</Text></Text>
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
        backgroundColor: GlobalStyles.colors.lightGray,
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
        height: 425,
    },
    pickup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pickupText:{
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 15,
        color: '#616161'
    },
    bold:{
      fontWeight: 'bold'
    }
  });
