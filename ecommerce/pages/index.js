import React from 'react';
import { Product, HeroBanner, FooterBanner } from '../components'

const Home = () => {
  return (
    <>
      HeroBanner

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variator</p>
      </div>

      <div className='products-container'>
        {["product 1", "product 2"].map(
          (product) => product
          )}
      </div>

      Footer
    </>
  );
}

export default Home;
