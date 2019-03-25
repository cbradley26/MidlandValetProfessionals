// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import ImageCarousel from './ImageCarousel';
import Testimonies from './Testimonies';
import Pricing from './Pricing';
import ContactForm from './ContactForm';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<ImageCarousel/>, document.getElementById('Carousel'));
ReactDOM.render(<Pricing/>, document.getElementById('Pricing'));
ReactDOM.render(<Testimonies/>, document.getElementById('Testimonies'));
ReactDOM.render(<ContactForm/>, document.getElementById('Book'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
