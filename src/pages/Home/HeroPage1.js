import React from 'react';
import image3 from '../../images/image-3.svg';
import image4 from '../../images/image-4.svg';
import image5 from '../../images/image-5.svg';
import image6 from '../../images/image-6.svg';
import mbtoken from '../../images/mbtoken.svg';
import metamask from '../../images/metamask.svg';
import opensea from '../../images/opensea.svg';

function HeroPage1({ location }) {
  return (
    <section className='section hero'>
      <div className='hero-info'>
        <div className='hero-ideas'>
          <h4 className='hero-title'>
            Rent a <span className='hero-tag'>place</span> away from
            <span className='hero-tag'> home</span> in the
            <span className='hero-tag'> metaverse</span>
          </h4>
          <p>
            We provide you the access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className='home-form'>
            <input
              type='text'
              value={location}
              className='home-input'
              placeholder='search location here'
            />
            <label htmlFor='search' className='home-label btn'>
              search
            </label>
          </form>
        </div>
        <div className='hero-imags'>
          <div className='set-1'>
            <img src={image3} alt='' className='img-3 img' />
            <img src={image4} alt='' className='img-4 img' />
          </div>
          <div className='set-2'>
            <img src={image5} alt='' className='img-5 img' />
            <img src={image6} alt='' className='img-6 img' />
          </div>
        </div>
      </div>
      <div className='hero-liner'>
        <div className='mbtoken'>
          <img src={mbtoken} alt='MBToken' className='mb img' />
          <span>MBToken</span>
        </div>
        <div className='metamask'>
          <img src={metamask} alt='metamask' className='meta img' />
          <span>METAMASK</span>
        </div>
        <div className='opensea'>
          <img src={opensea} alt='opensea' className='open img' />
          <span>OpenSea</span>
        </div>
      </div>
    </section>
  );
}

export default HeroPage1;
