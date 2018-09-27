import React, { Component } from 'react';
import './App.css';
import Test from './components/Test';

// import EditTree from './components/EditTree';

class App extends Component {
  render() {
    return (
    <div className="App">
    <Test></Test>
      {/* <EditTree></EditTree> */}
    </div>
    );
  }
}

export default App;
