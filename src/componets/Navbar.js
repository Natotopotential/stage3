import React from 'react';
import logo from '../images/nav-logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-logo'>
          <Link to='/' target='_self'>
            <img src={logo} alt='nav-logo' className='logo-img' />
          </Link>

          <div className='nav-buttons'>
            <button className='btn toggle-btn' onClick={handleOpen}>
              <FaBars />
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'nav-items nav-show' : 'nav-items'}`}>
          <div className='nav-item'>
            <button className='btn close-btn' onClick={handleClose}>
              <FaTimes />
            </button>
            <ul className='nav-links'>
              <li className='nav-link'>
                <Link to='/' target='_self' className='home'>
                  home
                </Link>
              </li>
              <li className='nav-link'>
                <Link className='place' to='/places' target='_blank'>
                  place <span className='small'>t</span>o
                  <span className='small'> s</span>tay
                </Link>
              </li>
              <li className='nav-link'>
                <a href='' className='place nft'>
                  nft<span className='small'>s</span>
                </a>
              </li>
              <li className='nav-link'>
                <a href='' className='place'>
                  community
                </a>
              </li>
            </ul>

            <Link className='connect-btn btn' to='/connect' target='_self'>
              connect wallet
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
