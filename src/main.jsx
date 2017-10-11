import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';
import About from './about.jsx';

const elements = [
    <h1 key="title">the-simplest-webpack-react-starter-kit@1.0.0</h1>,
    <About key="about"/>
];

ReactDOM.render(
    elements,
    document.getElementById('root')
);