import React from 'react';
import Banner from '../components/seasons/Banner';
import Troubles from '../components/seasons/Troubles';
import About from '../components/seasons/About';
import Transform from '../components/seasons/Transform';
import Testimony from '../components/seasons/Testimony'
import Contact from '../components/seasons/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Banner />
      <Troubles />
      <About />
      <Transform />
      <Testimony />
      <Contact />
    </main>
  );
};

export default Home;
