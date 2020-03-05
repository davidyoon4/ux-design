import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './pages/SignIn.js'
import About from './pages/SignUp.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "signin" component = {SignIn} title = "SignIn" initial = {true} />
         <Scene key = "signup" component = {SignUp} title = "SignUp" />
      </Scene>
   </Router>
)
export default Routes