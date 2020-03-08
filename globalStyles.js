import { StyleSheet} from 'react-native';

var colors = {
    primaryColor: '#4A9C2D',
    lightGray: '#F1F1F1',
    inputBgColor: '#e5e5e6',
    gray: '#c4c4c4',
    blue: '#007AFF'
};
var fonts = {
    titleSize: 48,
    standardFontSize: 20
}

const styles = StyleSheet.create({
    title: {
      color: colors.primaryColor,
      fontWeight: 'bold',
      fontSize: fonts.titleSize
    },
    buttonPrimary:{
      backgroundColor: colors.primaryColor,
      borderRadius:15,
      paddingTop:10,
      paddingBottom:10,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop:10,
    },
    buttonPrimaryText:{
    fontSize: fonts.standardFontSize,
      fontWeight: "bold",
      color: 'white',
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
        width: 300,
        fontSize: 20,
        textAlign: 'left',
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: colors.inputBgColor,
        flex: 1,
        alignItems: 'flex-start',
    },
    row: {
      flexDirection: 'row',
    },
    image:{
      width: 132,
      height: 100,
      marginHorizontal: 5,
      marginVertical: 5
    },
  });

  export {styles,colors,fonts};