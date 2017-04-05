import React from 'react';
import { Link } from 'react-router';

const Tabs = () =>
  <nav className="detailTabs">
      <Link to="/">THông tin</Link>
      <Link to="#">CLIP Hay</Link>
      <Link to="#">TRỌN bộ</Link>
      <Link to="#">Liên quan</Link>
      <Link to="#">bình luận</Link>
  </nav>;
export default Tabs;
