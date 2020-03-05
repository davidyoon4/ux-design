import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import * as GlobalStyles from '../globalStyles';
import BottomBar from './molecules/BottomBar';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: this.props.page,
      price: false,
      type: false,
      color: false,
      date: false
    }
  }

  createAcc = () => {
    this.setState({
      page: 'createAcc'
    })
  }

  priceActive = () => {
    this.setState({
      price: !this.state.price
    })
  }
  typeActive = () => {
    this.setState({
      type: !this.state.type
    })
  }
  colorActive = () => {
    this.setState({
      color: !this.state.color
    })
  }
  dateActive = () => {
    this.setState({
      date: !this.state.date
    })
  }

  render = () => {
    return (
      <View style={localStyles.container}>
        <View style={localStyles.searchContainer}>
          <Image style={localStyles.searchIcon} source={require('../icons/search.png')}/>
          <TextInput style={localStyles.searchBar} placeholder="Search" placeholderTextColor="black"/>
        </View>

        <View style={localStyles.filterContainer}>
        <Text>Filter By:</Text>

        <TouchableOpacity onPress={this.priceActive}style={!this.state.price ? localStyles.filter : localStyles.filterActive}>
          <Text style={!this.state.price ? localStyles.filterText : localStyles.filterTextActive}>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.typeActive}style={!this.state.type ? localStyles.filter : localStyles.filterActive}>
          <Text style={!this.state.type ? localStyles.filterText : localStyles.filterTextActive}>Type</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.colorActive}style={!this.state.color ? localStyles.filter : localStyles.filterActive}>
          <Text style={!this.state.color ? localStyles.filterText : localStyles.filterTextActive}>Color</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dateActive}style={!this.state.date ? localStyles.filter : localStyles.filterActive}>
          <Text style={!this.state.date ? localStyles.filterText : localStyles.filterTextActive}>Date</Text>
        </TouchableOpacity>
        </View>

        <BottomBar active='truck'/>
      </View>
    );
  }
}

export default Inventory;
const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 0.65
  },
  searchBar: {
    height: 37,
    width: 297,
    borderRadius: 15,
    paddingLeft: 35,
    backgroundColor: GlobalStyles.colors.gray,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: -25,
    zIndex:9
  },
  filterContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  filter: {
    backgroundColor: GlobalStyles.colors.gray,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
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
    marginRight: 5,
    marginLeft: 5
  }
});
