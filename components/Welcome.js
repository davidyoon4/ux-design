import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CreateAcc from './CreateAcc';
import * as Styles from '../styles';
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


  render = () => {
    if (this.state.page == 'welcome'){
      return (
        <View style={localStyles.container}>
          <Text style={localStyles.title}>Welcome!</Text>
          <TouchableOpacity style={localStyles.buttonPrimary} onPress={this.createAcc}>
              <Text style={localStyles.buttonPrimaryText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={localStyles.buttonSecondary}>
              <Text style={localStyles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    }
    else{
      return (
        <CreateAcc page={this.state.page} />
      );
    }
  }
}

export default Welcome;
const localStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Styles.colors.primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: Styles.fonts.titleSize
    },
    buttonPrimary:{
      backgroundColor:'white',
      borderRadius:15,
      paddingTop:10,
      paddingBottom:10,
      marginTop:10,
    },
    buttonPrimaryText:{
      fontSize: Styles.fonts.buttonTextSize,
      fontWeight: "bold",
      color: Styles.colors.primaryColor,
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
      fontSize: Styles.fonts.buttonTextSize,
      fontWeight: "bold",
      color: 'white',
      textAlign:'center',
      paddingLeft : 15,
      paddingRight : 15
    },
  });
