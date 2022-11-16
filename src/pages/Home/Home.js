import React from 'react';
import data from '../../data';
import { useState } from 'react';
import HeroPage1 from './HeroPage1';
import HeroPage2 from './HeroPage2';
import HeroPage3 from './HeroPage3';

function Home() {
  const [houses, setProducts] = useState(data);
  const [location, setLocation] = useState('');

  return (
    <div>
      <HeroPage1 location={location} />
      <HeroPage2 />
      <HeroPage3 />
    </div>
  );
}

export default Home;
