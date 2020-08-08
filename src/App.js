import React from 'react';
import logo from './rob-circle.png';
import topLeft from './crop-img-1.png'
import bottomLeft from './crop-img-2.jpg'
import topRight from './crop-img-3.jpg'
import bottomRight from './crop-img-4.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={topLeft} className="top-left" alt="rob" />
      <h1 className="center-left">NOT</h1>
      <img src={bottomLeft} className="bottom-left" alt="rob" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ROB'S NOT WRONG
        </p>
      </header>
      <img src={topRight} className="top-right" alt="rob" />
      <h1 className="center-right">EVER</h1>
      <img src={bottomRight} className="bottom-right" alt="rob" />
    </div>
  );
}

export default App;