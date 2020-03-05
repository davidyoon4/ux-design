import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import * as Styles from '../styles';
import * as GlobalStyles from '../globalStyles';

class CreateAcc extends React.Component{
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
    // if (this.state.page == 'createAcc'){
      return (
        <View style={styles.container}>
            <Text style={GlobalStyles.styles.title}>Sign Up</Text>
          <View style={styles.formContainer}>
          <TextInput style={GlobalStyles.styles.input} placeholder="Name"/>
          <TextInput style={GlobalStyles.styles.input} placeholder="NU Email"/>
          <TextInput style={GlobalStyles.styles.input} placeholder="Password"/>
          <TextInput style={GlobalStyles.styles.input} placeholder="Confirm Password"/>
          <TextInput style={GlobalStyles.styles.input} placeholder="General Location"/>
          </View>
          <TouchableOpacity style={GlobalStyles.styles.buttonPrimary}>
              <Text style={GlobalStyles.styles.buttonPrimaryText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
//     }
//     else{
//       return (
//         <Text>Uh</Text>
//       );
//     }
  }
}

export default CreateAcc;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Styles.colors.lightGray,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: Styles.colors.primaryColor,
      fontWeight: 'bold',
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
      fontWeight: "bold",
      color: 'white',
      textAlign:'center',
      paddingLeft : 15,
      paddingRight : 15
    },
    formContainer : {
      flex: 0.65
    }
  });
