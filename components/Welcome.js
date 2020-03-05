import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CreateAcc from './CreateAcc';
import SignIn from './SignIn';
import * as GlobalStyles from '../globalStyles';

class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.state = {page: this.props.page}
  }

  createAcc = () => {
    this.setState({
      page: 'createAcc'
    })
  }

  signIn = () => {
    this.setState({
      page: 'signIn'
    })
  }


  render = () => {
    if (this.state.page == 'welcome'){
      return (
        <View style={localStyles.container}>
          <Text style={localStyles.title}>Welcome!</Text>
          <TouchableOpacity style={localStyles.buttonPrimary} onPress={this.createAcc}>
              <Text style={localStyles.buttonPrimaryText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.buttonSecondary} onPress={this.signIn}>
              <Text style={localStyles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    }
    else if (this.state.page == 'createAcc'){
      return (
        <CreateAcc page={this.state.page} />
      );
    }
    else if (this.state.page == 'signIn'){
      return (
        <SignIn page={this.state.page} />
      );
    }
  }
}

export default Welcome;
const localStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4A9C2D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: 48,
      fontWeight: 'bold'
    },
    buttonPrimary:{
      backgroundColor:'white',
      borderRadius:15,
      paddingTop:10,
      paddingBottom:10,
      marginTop:10,
    },
    buttonPrimaryText:{
      fontSize: 20,
      fontWeight: "bold",
      color: '#4A9C2D',
      textAlign:'center',
      paddingLeft : 15,
      paddingRight : 15
    },
    buttonSecondary:{
      backgroundColor: 'transparent',
      borderRadius:15,
      borderWidth: 1,
      borderColor: '#fff',
      paddingTop:10,
      paddingBottom:10,
      marginTop:10,
    },
    buttonSecondaryText:{
      fontSize: 20,
      fontWeight: "bold",
      color: 'white',
      textAlign:'center',
      paddingLeft : 15,
      paddingRight : 15
    },
  });
