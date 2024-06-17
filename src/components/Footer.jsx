import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Footer.css';

const Footer = withRouter(({location:{pathname}})=> {
    return (
      !(pathname.includes('gif/')) && <footer className="footer">
        <div className="container">
        <div className="navbar-collapse" id="footer">
            <ul className="navbar-nav ml-auto">              
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/disclosure">DISCLOSURE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/privacy">PRIVACY POLICY</Link>
              </li>              
            </ul>
          </div>
          <div className='copyright'>
            <span className="text-muted">Copyright ©story4u.info 2020</span>
          </div>          
        </div>
      </footer>
    );
})

export default Footer;
