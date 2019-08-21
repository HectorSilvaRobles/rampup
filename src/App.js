import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Hero />
      </body>
    </div>
  );
}

export default App;
