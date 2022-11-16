import React from 'react';
import vector from '../images/Vector.svg';
import times from '../images/times.svg';
import metamask from '../images/metamask.svg';
import walletconnect from '../images/walletconnect.svg';
import Home from './Home/Home';
import { Link } from 'react-router-dom';

function ConnectWallet() {

 
  return (
    <div className='connect'>
      <div className='overlay'>
        <div className='home-connect'>{<Home />}</div>
        <div className='connect-center'>
          <div className='connect-title'>
            <h4>Connect Wallet </h4>
            <Link className='times-btn btn'
            to='/' target="_self"
            >
              <img src={times} alt='times' className='times imges' />
            </Link>
          </div>

          <p className='connect-info'>Choose your preferred value:</p>
          <div className='connect-images'>
            <div className='meta-connect con'>
              <img src={metamask} alt='metamask' className='meta img' />
              <img src={vector} alt='vector' className='vector img' />
            </div>
            <div className='open-connect con'>
              <img
                src={walletconnect}
                alt='walletconnect'
                className='opensea-connect img'
              />
              <img src={vector} alt='vector' className='vector' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
