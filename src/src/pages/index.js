import React from 'react'
import { Link } from 'gatsby'

import Navbar from '../components/navbar';
import Baner from '../components/baner';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Other from '../components/other';
import Contact from '../components/contact';
import Social from '../components/social';
import Footer from '../components/footer';

export default () => (
  <div className='fullwidth fullheight is-flex is-flex-column has-items-vertical-centered'>
    <Navbar />
    <Baner />
    <About />
    <Portfolio />
    <Other />
    <Contact />
    <Social />
    <Footer />
  </div>
);