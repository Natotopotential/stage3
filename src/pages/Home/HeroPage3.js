import React from 'react';
import images from '../../images/3images.svg';



function HeroPage3() {
  return (
    <div>
      <div>
        <div className='heropage3-center heropage3'>
          <div className='heropage3-info'>
            <h4 className='heropage3-title'>Metabnb NFTs</h4>
            <p className='heropage3-content'>
              Discover our NFTs gift cards collection.Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs give our
              customers access to loads of our exclusive services.
            </p>

            <button className='heropage3-btn btn'>Learn more</button>
          </div>
          
            <img src={images} alt='3images' className='imagees img' />
           
         
        </div>
      </div>
    </div>
  );
}

export default HeroPage3;
