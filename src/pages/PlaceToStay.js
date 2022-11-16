import React from 'react';
import locationSetting from '../images/location-setting.svg';
import { homes1, homes2 } from './Home/Homes';
import home1 from '../images/home-1.svg';
import home2 from '../images/home-2.svg';
import home3 from '../images/home-3.svg';
import home4 from '../images/home-4.svg';
import home5 from '../images/home-5.svg';
import home6 from '../images/home-6.svg';
import home7 from '../images/home-7.svg';
import home8 from '../images/home-8.svg';
import home9 from '../images/home-9.svg';
import home10 from '../images/home-10.svg';
import home11 from '../images/home-11.svg';
import home12 from '../images/home-12.svg';
import home13 from '../images/home-13.svg';
import home14 from '../images/home-14.svg';
import home15 from '../images/home-15.svg';
import home16 from '../images/home-16.svg';

function PlaceToStay() {
  return (
    <div>
      <div className='places section'>
        {/* ==============places header================== */}
        <div className='places-header'>
          <div className='place-title'>
            <ul className='place-links'>
              <li className='place-link'>
                <a href='' className='resturant'>
                  resturant
                </a>
              </li>
              <li className='place-link'>
                <a href='' className='cottage'>
                  cottage
                </a>
              </li>
              <li className='place-link'>
                <a href='' className='castle'>
                  castle
                </a>
              </li>
              <li className='place-link'>
                <a href='' className='fantast city'>
                  fantast city
                </a>
              </li>
              <li className='place-link'>
                <a href='' className='beach'>
                  beach
                </a>
              </li>
              <li className='place-link'>
                <a href='' className='carbins'>
                  carbins
                </a>
              </li>
              <li className='place-link'>
                <a href='' className='off-grid'>
                  off-grid
                </a>
              </li>
              <li className='place-link'>
                <a href='' className='farm'>
                  farm
                </a>
              </li>
            </ul>
          </div>
          <button className='btn location-btn'>
            <div>location</div>
            <span className='location-item'>
              <img
                src={locationSetting}
                alt='location setting'
                className='location-setting'
              />
            </span>
          </button>
        </div>
        {/* ============end of places header============== */}
        {/* ================places center=============== */}
        <div className='places-center'>
          {/* {homes2()}
          {homes1()} */}
          <div className='hero-images'>
            <img src={home1} alt='home1' className='home-1 img imgs' />
            <img src={home2} alt='home2' className='home-2 img imgs' />
            <img src={home3} alt='home3' className='home-3 img imgs' />
            <img src={home4} alt='home4' className='home-4 img imgs' />
            <img src={home5} alt='home5' className='home-5 img imgs' />
            <img src={home6} alt='home6' className='home-6 img imgs' />
            <img src={home7} alt='home7' className='home-7 img imgs' />
            <img src={home8} alt='home8' className='home-8 img imgs' />
            <img src={home9} alt='home9' className='home-9 img imgs' />
            <img src={home10} alt='home10' className='home-10 img imgs' />
            <img src={home11} alt='home11' className='home-11 img imgs' />
            <img src={home12} alt='home12' className='home-12 img imgs' />
            <img src={home13} alt='home13' className='home-13 img imgs' />
            <img src={home14} alt='home14' className='home-14 img imgs' />
            <img src={home15} alt='home15' className='home-15 img imgs' />
            <img src={home16} alt='home16' className='home-16 img imgs' />
          </div>
        </div>

        {/* ================places center=============== */}
      </div>
    </div>
  );
}

export default PlaceToStay;
