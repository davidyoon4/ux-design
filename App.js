import React from 'react';
import Controller from './Controller';

export default function App() {
  var page = 'welcome';
  console.disableYellowBox = true;
  return (
    <Controller page={page}/>
  );
}