import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Disclosure extends Component {
  render() {
    return (
        <div className="container" style={{'min-height': '500px'}}>
        <h1>Disclosure</h1>
        <p>This site uses affiliate links and does earn a commission from certain links. This does not affect your purchases or the price you may pay.</p>
        </div>
    );
  }
}

export default Disclosure
