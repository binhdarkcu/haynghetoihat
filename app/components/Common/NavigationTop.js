import React from 'react';

const NavigationTop = () =>
  <nav>
    <ul>
        <li><a href="#" className="btn-search"></a></li>
        <li><a href="#" className="btn-notification"><span>1</span></a></li>
        <li><a href="#" className="btn-avatar"><img src="/app/assets/img/avatar.png"/></a></li>
        <li className="username">
            <a href="#">Đăng nhập</a>
            <ul className="submenu">
                <li><a href="#">Trang cá nhân</a></li>
                <li><a href="#">Thông tin</a></li>
                <li><a href="#">Giao dịch</a></li>
                <li className="signout"><a href="#">Đăng xuất</a></li>
            </ul>
        </li>
    </ul>
  </nav>;
export default NavigationTop;
