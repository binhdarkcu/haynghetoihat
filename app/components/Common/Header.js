import React from 'react';
import NavigationTop from './NavigationTop';
import SlickSlider from './SlickSlider';

const Header = () =>
  <header>
        <a href="#" className="logo"><img src="../app/assets/img/logo.png" /></a>
        <NavigationTop />
        <SlickSlider />
  </header>;
export default Header;
