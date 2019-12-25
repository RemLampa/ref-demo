import React from 'react';
import './App.css';
import ClassRef from './components/ClassRef';
import HooksRef from './components/HooksRef';

function App() {
  return (
    <div className="App">
      <h1>React Refs Demo</h1>
      <div className="test-area">
        <ClassRef />
        <HooksRef />
      </div>
    </div>
  );
}

export default App;
