import React from 'react';
import footerLogo from '../images/footer-icon.svg';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

function Footer() {
  return (
    <footer className='homepage3-footer'>
      <div className='footer-center'>
        <div className='footer-info'>
          <div className='footer-logos'>
            <div className='footer-log'>
              <img src={footerLogo} alt='footericon' className='footer-img' />
              <h3 className='footer-logo'>Metabnb</h3>
            </div>

            <div className='social-icons'>
              <img
                src={facebook}
                alt='facebook'
                className='facebook social-icon'
              />
              <img
                src={instagram}
                alt='instagram'
                className='instagram social-icon'
              />
              <img
                src={twitter}
                alt='twitter'
                className='twitter social-icon'
              />
            </div>
          </div>
          <div className='footer-items'>
            {/* -------------community items-------------- */}
            <div className='community footer-item'>
              <ul className='community-lists'>
                <li className='community-list'>Community</li>
                <li className='community-list'>
                  <a href='' className='nft'>
                    NFT
                  </a>
                </li>
                <li className='community-list'>
                  <a href='' className='token'>
                    Token
                  </a>
                </li>
                <li className='community-list'>
                  <a href='' className='landlord'>
                    Landlord
                  </a>
                </li>
                <li className='community-list'>
                  <a href='' className='discord'>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            {/* -------------Places items-------------- */}
            <div className='places footer-item'>
              <ul className='places-lists'>
                <li className='places-list'>Places</li>
                <li className='places-list'>
                  <a href='' className='castle'>
                    Castle
                  </a>
                </li>
                <li className='places-list'>
                  <a href='' className='farms'>
                    Farms
                  </a>
                </li>
                <li className='places-list'>
                  <a href='' className='beach'>
                    beach
                  </a>
                </li>
                <li className='places-list'>
                  <a href='' className='learn more'>
                    learn more
                  </a>
                </li>
              </ul>
            </div>
            {/* -------------About items-------------- */}
            <div className='about footer-item'>
              <ul className='about-lists'>
                <li className='about-list'>About us</li>
                <li className='about-list'>
                  <a href='#' className='road-map'>
                    road map
                  </a>
                </li>
                <li className='about-list'>
                  <a href='#' className='creators'>
                    creators
                  </a>
                </li>
                <li className='about-list'>
                  <a href='#' className='career'>
                    career
                  </a>
                </li>
                <li className='about-list'>
                  <a href='#' className='contact'>
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-remark'>&copy; 2002 Metabnb</div>
      </div>
    </footer>
  );
}

export default Footer;
