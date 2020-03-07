import React from 'react';
import CreateAcc from './components/CreateAcc';
import Inventory from './components/Inventory';
import Request from './components/Request';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import Map from './components/Map';

class Controller extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        page: 'welcome'
    }
  }

  changeScreen = (screen) => {
    this.setState({page: screen})
  }
  
  render = () => {
    if (this.state.page == 'welcome'){
      return (
        <Welcome changeScreen={this.changeScreen} />
      );
    }
    else if (this.state.page == 'createAcc'){
      return (
        <CreateAcc changeScreen={this.changeScreen} />
      );
    }
    else if (this.state.page == 'signIn'){
      return (
        <SignIn changeScreen={this.changeScreen} />
      );
    }
    else if (this.state.page == 'inventory'){
        return (
          <Inventory changeScreen={this.changeScreen}/>
        );
    }
    else if (this.state.page == 'request'){
        return (
          <Request changeScreen={this.changeScreen}/>
        );
    }
    else if (this.state.page == 'map'){
      return (
        <Map changeScreen={this.changeScreen}/>
      );
  }
  }
}

export default Controller