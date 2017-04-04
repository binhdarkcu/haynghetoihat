import React from 'react';
import NavigationTop from './NavigationTop';
import SlickSlider from './SlickSlider';

const Header = () =>
  <header>
        <div className="wrap">
            <a href="#" className="logo"><img src="../app/assets/img/logo.png" /></a>
            <NavigationTop />
        </div>
        <SlickSlider />
  </header>;
export default Header;
