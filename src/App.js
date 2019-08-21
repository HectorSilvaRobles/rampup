import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import UnderHero from './Components/UnderHero/UnderHero'
import ProductIntro from './Components/ProductIntro/ProductIntro'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Hero />
        <UnderHero />
        <ProductIntro />
        <HowItWorks />
        <Footer />
      </body>
    </div>
  );
}

export default App;
