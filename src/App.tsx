import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Card from './components/shared/card/Card';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Main /> 
    </div>
  );
}

export default App;
