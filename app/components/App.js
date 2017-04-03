import React, { PropTypes } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import '../styles/style.scss';

const App = ({ children }) =>
    <div className="container">
        <Header />
        { children }
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
