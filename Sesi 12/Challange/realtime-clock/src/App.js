import React from 'react';
import './App.css';
import Clock from './Component/Class/ClassComponent.jsx';
import ClockFunction from './Component/Function/FunctionComponent.jsx';

function App() {
  return (
    <div className="App">
      <ClockFunction/>
    <hr/>
      <Clock/>
    </div>
  );
}

export default App;
