import React from 'react';

import Aos from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Brands from './components/Brands';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Product from './components/Product';
import Pricing from './components/Pricing';
import Feedback from './components/Feedback';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App = () => {
  Aos.init ({
      duration: 1800,
      offset: 100
  })
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Overview />
      <Brands />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Product />
      <Pricing />
      <Feedback />
      <Stats />
      <Footer />
    </div>
  );
};

export default App;
