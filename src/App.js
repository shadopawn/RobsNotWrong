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
      <header className="App-header">
        <img src={topLeft} className="top-left" alt="rob" />
        <h1 className="center-left">NOT</h1>
        <img src={bottomLeft} className="bottom-left" alt="rob" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ROB'S NOT WRONG
        </p>
        <img src={topRight} className="top-right" alt="rob" />
        <h1 className="center-right">EVER</h1>
        <img src={bottomRight} className="bottom-right" alt="rob" />
      </header>
      <h1 className="quote-heading">welcome to my new website I sold my old website and they changed the name to Google. I don't think it's going to catch on.</h1>
      <p className="quote">"When the maple leaves turn upside down rain's a'comin"<br/>-Robin </p>
      <p className="quote">"If you're not squealin' tires when you parallel park, then you haven't really parallel parked."<br/>-Robin</p>
      <p className="quote">"Guess what Gwynnie, guess what chicken butt"<br/>-Uncle</p>
      <p className="quote">"with proper momentum anything will fit"<br/>-Robin</p>
      <p className="quote">"I will eat anyting except reproductive organs and brains"<br/>-Robin</p>
    </div>
  );
}

export default App;