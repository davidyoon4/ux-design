import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

var primaryColor = '#4A9C2D';

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
            <Text style={styles.title}>Create An Account</Text>
          <TextInput style={styles.input} placeholder="NU Email"/>
          <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
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
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: primaryColor,
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
    input:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#8E8E93',
    }
  });
