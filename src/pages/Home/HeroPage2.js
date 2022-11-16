import React from 'react';
import { homes1 } from './Homes';

function HeroPage2() {
  return (
    <section className='section hero-2'>
      <h4 className='heroPage2-title'>Inspiration for your next adventure</h4>
      <div className='hompage2-images'> {homes1()}</div>
    </section>
  );
}

export default HeroPage2;
