import React from 'react';
import CategoryList from '../../components/Category/CategoryList';

const Home = () =>
    <section className="home">
        <div className="head">
            <h3 className="title">ĐANG XEM</h3>
            <a href="#" className="viewall">Tất cả</a>
        </div>
        <CategoryList />
        <div className="head">
            <h3 className="title">THVL ĐỀ XUẤT</h3>
            <a href="#" className="viewall">Tất cả</a>
        </div>
        <CategoryList />
    </section>;
export default Home;
