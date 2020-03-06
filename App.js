import React from 'react';
import Welcome from './components/Welcome';

export default function App() {
  var page = 'welcome';
  if (page == 'welcome') {
    return (
      <Welcome page={page}/>
    );
  }
  else {
    return (
      <Text>uh</Text>
    );
  }

}