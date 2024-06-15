import React, { useRef, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = withRouter(({location:{pathname}}) => {
  const [isLogin, setLogin] = useState(false);
  const divRef = useRef('');
  let login;

  useEffect(()=>{
    login = JSON.parse(localStorage.getItem('login'));
    login ? setLogin(login.auth) : setLogin(false);

  },[localStorage.getItem('login')])

  const removeClass = () => {
    divRef.current.classList.remove('show');
  };

  const logOut = () => {
    localStorage.removeItem('login');
  };

  
  return (
    !(pathname == '/gif/jgd' || pathname == '/gif/sjgd') && <nav className="navbar navbar-toggleable-md">
      <div className="webName">भारत और अध्यात्म</div>
      <button
        style={{ outline: 'none' }}
        className={`navbar-toggler navbar-toggler-right`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">Menu</span>
      </button>
      <div className="container container-menu-item">
        <div
          className="collapse navbar-collapse"
          id="navbarCollapse"
          ref={divRef}
          onClick={removeClass}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {false && (
              <li className="nav-item">
                <Link className="nav-link" to="/myPage">
                  My Page
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/gif">
                {' '}
                GIF{' '}
              </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/survey">Survey</Link>
              </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>               */}
            {!isLogin && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              </li>
            )}
            {isLogin && (
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logOut}>
                  Log Out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
