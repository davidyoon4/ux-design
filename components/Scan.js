import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';
import TopBar from './molecules/TopBar';

class Scan extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        venmoPartial: true
    }
  }


  render = () => {
      let venmoImage = this.state.venmoPartial ? <Image style={localStyles.venmoImage} source={require('../images/scanner/partial.png')}/> : <Image style={localStyles.venmoImage2} source={require('../images/scanner/full.png')}/>;
      return (
        <View style={localStyles.container}>
        <TopBar title='' left='Back' right=''/>
        <View style={localStyles.card}>
            <Text style={localStyles.card__title}>44 Monty Chair</Text>
            <Image style={localStyles.card__image} source={require('../images/chair2.jpg')}/>
            <View style={localStyles.card__profile}>
                <Image style={localStyles.profilePic} source={require('../images/scanner/bigDavid.png')}/>
                <View style={localStyles.profileText}>
                    <Text>David Yoon</Text>
                    <Text>McCormick 2021</Text>
                    <Text>he/him/his</Text>
                </View>
            </View>
            <Image source={require('../images/scanner/QR.png')}/>
        </View>
        <TouchableOpacity style={localStyles.venmoPartial} onPress={() => this.setState({venmoPartial: !this.state.venmoPartial})}>
            {venmoImage}
        </TouchableOpacity>
    
        <BottomBar active='scan' changeScreen={this.props.changeScreen}/>
      </View>
      );
  }
}

export default Scan;
const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.gray,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
    map:{
        height: 150
    },
    card: {
        backgroundColor: 'white',
        height: 450,
        width: 300,
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 60
    },
    card__title: {
        fontSize: 24,
        paddingVertical: 10
    },
    card__profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        marginVertical: 15
    },
    venmoPartial: {
        zIndex: 9,
        position: 'absolute',
        bottom: 72
    },
    venmoImage: {
        width: 420,
        zIndex: 9,
    },
    venmoImage2: {
        height: 600,
        width: 420
    },
    profilePic :{
        height: 69,
        width: 69,
        borderRadius: 50
    },
    card__image: {
        height: 200,
        width: 250
    }
  });
