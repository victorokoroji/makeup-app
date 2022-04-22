import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import MakeupCards from '../components/MakeUpCards';

const HomePage = () => (
  <section className="homepage">
    <div className="overlay">
      <Header />
      <Intro />
      <MakeupCards />
    </div>
  </section>
);

export default HomePage;
