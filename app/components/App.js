import React, { PropTypes } from 'react';
import Header from '../components/Common/Header';
import { Link } from 'react-router';
import { footer } from '../styles/footer.scss';
import '../styles/style.scss';

const App = ({ children }) =>
    <div className="container">
        <Header />
        { children }
        <footer className={footer}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
