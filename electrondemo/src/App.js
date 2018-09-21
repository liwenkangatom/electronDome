import React, { Component } from 'react';
import './App.css';
// import { Button } from 'antd'
import StaffSystem from './components/StaffSystem';
class App extends Component {
  render() {
    return (
      <div className="App">
        <StaffSystem></StaffSystem> 
      </div>
    );
  }
}

export default App;
