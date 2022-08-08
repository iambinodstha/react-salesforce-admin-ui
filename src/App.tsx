import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Exchanges from './pages/exchanges';
import DEFI from './pages/defi';

function App() {
  return (
    <div className="App">
      <Header/>
      <DEFI/>
    </div>
  );
}

export default App;
