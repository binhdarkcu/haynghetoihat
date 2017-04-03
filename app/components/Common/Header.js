import React from 'react';
import Navigation from './Navigation';
import SlickSlider from './SlickSlider';

const Header = () =>
  <header>
    <div className="container">
        <a href="#" className="logo"><img src="../app/assets/img/logo.png" /></a>
        <Navigation />
        <SlickSlider />
    </div>
  </header>;
export default Header;
