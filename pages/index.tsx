import React from 'react';
import Banner from '../components/seasons/Banner';
import Troubles from '../components/seasons/Troubles';
import About from '../components/seasons/About';
import Transform from '../components/seasons/Transform';
import Testimony from '../components/seasons/Testimony'
import "../assets/home/banner.css";

const Home: React.FC = () => {
  return (
    <main>
      <Banner />
      <Troubles />
      <About />
      <Transform />
      <Testimony />
    </main>
  );
};

export default Home;
