import React from 'react';
import { Link } from 'react-router';

const Navigation = () =>
  <nav className="main-nav">
      <Link to="/">Trang chủ</Link>
      <Link to="/truyen-hinh">Truyền hình</Link>
      <Link to="/tv-show">TV SHOW</Link>
      <Link to="/tv-show">Cải lương</Link>
      <Link to="/phim-thieu-nhi">Phim việt nam</Link>
      <Link to="/phim-nuoc-ngoai">Phim nước ngoài</Link>
      <Link to="/thieu-nhi">thiếu nhi</Link>
      <Link to="/ca-nhac">ca nhạc</Link>
  </nav>;
export default Navigation;
