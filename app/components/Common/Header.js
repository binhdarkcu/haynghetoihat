import React from 'react';
import NavigationTop from './NavigationTop';
import SlickSlider from './SlickSlider';

const Header = () =>
  <header>
    <div className="container">
        <a href="#" className="logo"><img src="../app/assets/img/logo.png" /></a>
        <NavigationTop />
        <SlickSlider />
    </div>
  </header>;
export default Header;
