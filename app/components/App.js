import React, { PropTypes } from 'react';
import Header from '../components/Common/Header';
import Navigation from '../components/Common/Navigation';
import Footer from '../components/Common/Footer';
import '../styles/style.scss';

const App = ({ children }) =>
    <div className="container">
        <Header />
        <Navigation />
        { children }
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
