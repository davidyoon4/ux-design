import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Welcome extends React.Component{
  constructor(props){
    super(props);
  }

  render = () => {
      return (
        <View style={localStyles.container}>
          <Text style={localStyles.title}>Welcome!</Text>
          <TouchableOpacity style={localStyles.buttonPrimary} onPress={() => this.props.changeScreen('createAcc')}>
              <Text style={localStyles.buttonPrimaryText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.buttonSecondary} onPress={() => this.props.changeScreen('signIn')}>
              <Text style={localStyles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
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
