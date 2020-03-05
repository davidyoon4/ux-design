import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CreateAcc from './CreateAcc';

var primaryColor = '#4A9C2D';

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
        <View style={styles.container}>
          <Text style={styles.title}>Welcome!</Text>
          <TouchableOpacity style={styles.buttonPrimary} onPress={this.createAcc}>
              <Text style={styles.buttonPrimaryText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
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
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: 25
    },
    buttonPrimary:{
      backgroundColor:'white',
      borderRadius:15,
      paddingTop:10,
      paddingBottom:10,
      marginTop:10,
    },
    buttonPrimaryText:{
      fontWeight: "bold",
      color: primaryColor,
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
      fontWeight: "bold",
      color: 'white',
      textAlign:'center',
      paddingLeft : 15,
      paddingRight : 15
    },
  });
