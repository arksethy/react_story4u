import React, { Component, useState, useEffect } from 'react';
import { postApi } from '../service/service';
import { API_URL } from '../config';
import { Link } from 'react-router-dom';
import CircularLoader from '../components/common/loader/loader.jsx';

const login = JSON.parse(localStorage.getItem('login')),
  token = login && login.token,
  userloginname = login && login.loginUser,
  role = login && login.role;

const JgdSatsangList = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [satsangList, setSatsangList] = useState([]);

  let customClass =
      match.path === '/jgd-satsang'
        ? 'satsang'
        : match.path === '/badela-satsang'
        ? 'badela-satsang'
        : match.path === '/prarthna'
        ? 'prarthna'
        : match.path === '/jivani'
        ? 'jumbotron'
        : 'jumbotron',
    heading =
      match.path === '/jgd-satsang'
        ? 'सतगुरु जयगुरुदेव:- सत्संग वचन'
        : match.path === '/badela-satsang'
        ? 'सतगुरु जयगुरुदेव:- बड़ेला-धाम सत्संग वचन'
        : match.path === '/prarthna'
        ? 'प्रार्थना-संग्रह'
        : match.path === '/jivani'
        ? 'जीवन-परिचय'
        : match.path === '/navin-suchnaye'
        ? 'बड़ेला-धाम नवीन सुचनाये एवं अन्तर्घट संदेश'
        : match.path === '/badela-dham'
        ? 'बड़ेला-धाम परिचय'
        : match.path === '/nij-anubhav'
        ? 'प्रेमीयो के निज अंतर-अनुभव'
        : match.path === '/jgd-pic'
        ? 'स्वामी जी फोटो-गैलरी'
        : match.path === '/badela-pic'
        ? 'बड़ेला-धाम फोटो-गैलरी'
        : match.path === '/world-message'
        ? 'स्वामी जी महाराज का संदेश-विश्व के समस्त प्रेमियो के लिए'
        : 'स्वामीजी महाराज द्वारा सुनायी गयी कहानियाँ';

  useEffect(() => {
    getSatsangList(`${API_URL}/satsang/list`, token);
  }, []);

  const getSatsangList = (apiUrl, token) => {
    let category =
        match.path === '/jgd-satsang'
          ? 1
          : match.path === '/badela-satsang'
          ? 2
          : match.path === '/prarthna'
          ? 3
          : match.path === '/jivani'
          ? 5
          : match.path === '/navin-suchnaye'
          ? 8
          : match.path === '/badela-dham'
          ? 6
          : match.path === '/nij-anubhav'
          ? 7
          : match.path === '/jgd-pic'
          ? 9
          : match.path === '/badela-pic'
          ? 10
          : match.path === '/world-message'
          ? 11
          : 4,
      header = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body = { category: category };
    postApi(apiUrl, header, body).then((data) => {
      setIsLoading(false);
      data.status && setSatsangList(data.data);
    });
  };

  return (
    <div>
      <div style={{ marginBottom: '3%', minHeight: '700px' }}>
        <div className={customClass} style={{ marginBottom: '4%' }}></div>
        {isLoading ? (
          <div className="loader-container">
            <CircularLoader />
          </div>
        ) : (
          <div
            className="main-page-container"
            style={{ position: 'static', width: 'auto' }}
          >
            <h5>{heading}</h5>
            <div style={{ position: 'inherit', width: '90%', height: 'auto' }}>
              <ul className="navbar-nav ml-auto">
                {!isLoading &&
                  satsangList.map((row) => {
                    if (true) {
                      const route = `${match.path}/${row._id}`;
                      return (
                        <Link className="" to={route}>
                          {row.name}
                        </Link>
                      );
                    }
                  })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JgdSatsangList;
