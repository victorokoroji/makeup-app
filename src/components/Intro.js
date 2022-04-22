import React from 'react';
import makeup from '../assets/images/applying-makeup-foundation.gif';

const Intro = () => (
  <section className="intro-section">
    <div className="intro">
      <img src={makeup} alt="makeup" className="makeup-gif" />
      <div className="intro-desc">
        <h2>Your MakeOver!</h2>
        <p>You want to look adorable? Checkout your favourite makeups here.</p>
      </div>
    </div>
  </section>
);

export default Intro;
