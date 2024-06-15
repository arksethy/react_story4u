import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { postApi } from '../service/service';
import { API_URL } from '../config';
import CircularLoader from '../components/common/loader/loader';
import MetaDecorator from '../components/common/loader/metaDecorator';
import imgUrl from'../images/badela-satsang.jpeg';

import './Home.css';

const Home = ({ match, history }) => {
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [satsangList, setSatsangList] = useState([]);
  let token;

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem('login'));
    token = login && login.token;
    login ? setLogin(login.auth) : setLogin(false);
  }, [localStorage.getItem('login')]);

  useEffect(() => {
    getSatsangList(`${API_URL}/satsang/list`, token);
  }, []);

  const getSatsangList = (apiUrl, token) => {
    let header = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body = {};
    postApi(apiUrl, header, body).then((data) => {
      setIsLoading(false);
      data.status && setSatsangList(data.data);
    });
  };

  return (
    <div>
      {/* <MetaDecorator title='badela dham' description='satguru jaigurudev satsang'
      imgSrc={imgUrl} /> */}
      <script
        data-ad-client="ca-pub-3514662431507118"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <div style={{minHeight: '700px'}}>
        <div class="jumbotron"></div>
        {isLoading ? <div className='loader-container'><CircularLoader /></div> : <div
          className="main-page-container"
          style={{ position: 'static', width: 'auto' }}
        >
          {isLogin && (
            <Button style={{ position: 'relative', left: '60%' }} variant="">
              <Link className="" to="/satsang/add">
                Add Satsang
              </Link>
            </Button>
          )}
          <h5>स्वामी जी महाराज सत्संग वचन</h5>
          <div className="home-list-container">
            <ul className="navbar-nav ml-auto">
              {!isLoading &&
                satsangList
                  .filter((row) => row.category === 1)
                  .map((row, i) => {
                    if (i < 5) {
                      const route = `/jgd-satsang/${row._id}`;
                      return (
                        <Link className="" to={route}>
                          {row.name}
                        </Link>
                      );
                    }
                  })}
            </ul>
            <div style={{ position: 'static' }}>
              <Link className="" to="/jgd-satsang" style={{ color: '#1717e6' }}>
                more satsang list..
              </Link>
            </div>
          </div>
          <h4></h4>
          <h5>बड़ेला-धाम सत्संग</h5>
          <div className="home-list-container">
            <ul className="navbar-nav ml-auto">
              {!isLoading &&
                satsangList
                  .filter((row) => row.category === 2)
                  .map((row, i) => {
                    if (i < 5) {
                      const route = `/badela-satsang/${row._id}`;
                      return (
                        <Link className="" to={route}>
                          {row.name}
                        </Link>
                      );
                    }
                  })}
            </ul>
            <div style={{ position: 'static' }}>
              <Link
                className=""
                to="/badela-satsang"
                style={{ color: '#1717e6' }}
              >
                more badela-dham satsang list..
              </Link>
            </div>
          </div>
          <h4></h4>
          <h5>प्रार्थना संग्रह</h5>
          <div className="home-list-container">
            <ul className="navbar-nav ml-auto">
              {!isLoading &&
                satsangList
                  .filter((row) => row.category === 3)
                  .map((row, i) => {
                    if (i < 5) {
                      const route = `/prarthna/${row._id}`;
                      return (
                        <Link className="" to={route}>
                          {row.name}
                        </Link>
                      );
                    }
                  })}
            </ul>
            <div style={{ position: 'static' }}>
              <Link className="" to="/prarthna" style={{ color: '#1717e6' }}>
                more prarthna list..
              </Link>
            </div>
          </div>
          <h4></h4>
          <h5>जीवन-परिचय</h5>
          <div className="home-list-container">
            <ul className="navbar-nav ml-auto">
              {!isLoading &&
                satsangList
                  .filter((row) => row.category === 5)
                  .map((row, i) => {
                    if (i < 5) {
                      const route = `/jivani/${row._id}`;
                      return (
                        <Link className="" to={route}>
                          {row.name}
                        </Link>
                      );
                    }
                  })}
            </ul>
            <div style={{ position: 'static' }}>
              <Link className="" to="/jivani" style={{ color: '#1717e6' }}>
                see more list..
              </Link>
            </div>
          </div>
          <h4></h4>
          <h5>स्वामीजी महाराज द्वारा सुनायी गयी कहानियाँ</h5>
          <div className="home-list-container">
            <ul className="navbar-nav ml-auto">
              {!isLoading &&
                satsangList
                  .filter((row) => row.category === 4)
                  .map((row, i) => {
                    if (i < 5) {
                      const route = `/jgd-story/${row._id}`;
                      return (
                        <Link className="" to={route}>
                          {row.name}
                        </Link>
                      );
                    }
                  })}
            </ul>
            <div style={{ position: 'static' }}>
              <Link className="" to="/jgd-story" style={{ color: '#1717e6' }}>
                see more list..
              </Link>
            </div>
          </div>
          <h4></h4>
        </div>}
      </div>
    </div>
  );
};

export default Home;
