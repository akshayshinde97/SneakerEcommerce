import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';

import React from 'react';

const Home = () => {
  return <div>
    <Banner />
      <Nav />
      <Slider />
      <Categories />
      <Products />
  </div>;
};

export default Home;
