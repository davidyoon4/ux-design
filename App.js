import React from 'react';
import Controller from './Controller';

export default function App() {
  var page = 'welcome';
  return (
    <Controller page={page}/>
  );
}