import React from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/Home/Index';
import '../styles/home.scss';

const InitHomePage = () => {
    return (
        <HomePage />
    );
};

export default connect(

)(InitHomePage);
