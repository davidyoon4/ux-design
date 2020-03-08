import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      price: false,
      type: false,
      color: false,
      date: false
    }
  }

  render = () => {
    let tableRow1paths = [require('../images/1.png'),require('../images/2.png'),require('../images/3.png')];
    let tableRow1 = [];
    for (var i=0; i<tableRow1paths.length; i++){
      tableRow1.push(
        <Image style={GlobalStyles.styles.image} source={tableRow1paths[i]}/>
      )
    }

    let tableRow2paths = [require('../images/4.png'),require('../images/5.png'),require('../images/6.png')];
    let tableRow2 = [];
    for (var i=0; i<tableRow2paths.length; i++){
      tableRow2.push(
        <Image style={GlobalStyles.styles.image} source={tableRow2paths[i]}/>
      )
    }

    let newRow3paths = [require('../images/7.png'),require('../images/8.png'),require('../images/9.png')];
    let newRow3 = [];
    for (var i=0; i<newRow3paths.length; i++){
      newRow3.push(
        <Image style={GlobalStyles.styles.image} source={newRow3paths[i]}/>
      )
    }

    let newRow4paths = [require('../images/10.png'),require('../images/11.png'),require('../images/12.png')];
    let newRow4 = [];
    for (var i=0; i<newRow3paths.length; i++){
      newRow4.push(
        <Image style={GlobalStyles.styles.image} source={newRow4paths[i]}/>
      )
    }

      return (
        <View style={localStyles.container}>
          <View style={localStyles.searchContainer}>
            <Image style={localStyles.searchIcon} source={require('../icons/search.png')}/>
            <TextInput style={localStyles.searchBar} placeholder="Search" placeholderTextColor="black"/>
          </View>
  
          <View style={localStyles.filterContainer}>
          <Text>Filter By:</Text>
  
          <TouchableOpacity onPress={() => this.setState({ price: !this.state.price })} style={!this.state.price ? localStyles.filter : localStyles.filterActive}>
            <Text style={!this.state.price ? localStyles.filterText : localStyles.filterTextActive}>Price</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ type: !this.state.type })} style={!this.state.type ? localStyles.filter : localStyles.filterActive}>
            <Text style={!this.state.type ? localStyles.filterText : localStyles.filterTextActive}>Type</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ color: !this.state.color })} style={!this.state.color ? localStyles.filter : localStyles.filterActive}>
            <Text style={!this.state.color ? localStyles.filterText : localStyles.filterTextActive}>Color</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ date: !this.state.date })} style={!this.state.date ? localStyles.filter : localStyles.filterActive}>
            <Text style={!this.state.date ? localStyles.filterText : localStyles.filterTextActive}>Date</Text>
          </TouchableOpacity>
          </View>
  
          <Text style={localStyles.header}>Tables</Text>
          <View>
            <View style={GlobalStyles.styles.row}>
              {tableRow1}
            </View>
            <View style={GlobalStyles.styles.row}>
            {tableRow2}
            </View>
          </View>
          
          <Text style={localStyles.header}>Newest</Text>
          <View>
            <View style={GlobalStyles.styles.row}>
            {newRow3}
            </View>
            <View style={GlobalStyles.styles.row}>
            {newRow4}
            </View>
          </View>
  
          <BottomBar active='truck' changeScreen={this.props.changeScreen}/>
        </View>
      );
  }
}

export default Inventory;
const localStyles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: GlobalStyles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    height: 37,
    width: 350,
    borderRadius: 15,
    paddingLeft: 35,
    backgroundColor: GlobalStyles.colors.gray,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25
  },
  searchIcon: {
    marginRight: -25,
    zIndex:9
  },
  filterContainer: {
    marginRight: 50,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter: {
    backgroundColor: GlobalStyles.colors.gray,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5
  },
  filterActive: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5
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
  header:{
    textAlign: "left",
    width: 300,
    fontSize: 18,
    alignSelf: 'stretch',
    paddingTop: 25,
    paddingLeft: 28
  },



});
