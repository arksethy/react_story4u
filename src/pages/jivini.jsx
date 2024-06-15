import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getApi, postApi } from '../service/service';
import { API_URL } from '../config';
import CircularLoader from '../components/common/loader/loader';
import MetaDecorator from '../components/common/loader/metaDecorator';
import imgUrl from '../images/satsang.jpg';

const login = JSON.parse(localStorage.getItem('login')),
  token = login && login.token,
  userloginname = login && login.loginUser,
  role = login && login.role;

class Jivni extends Component {
  state = {
    value: '',
    isloading: true,
    satsang: null,
  };

  componentDidMount() {
    this.getSatsang(`${API_URL}/satsang/${this.getId()}`);
  }

  getId = () => {
    return this.props.match.params.id;
  };

  getSatsang = (apiUrl) => {
    let header = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    getApi(apiUrl, header).then((data) => {
      this.setState({ isloading: false, satsang: data.data });
    });
  };

  removeSatsang = (apiUrl, id) => {
    let header = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body = { id: id };
    postApi(apiUrl, header, body).then((data) => {
      if (data.success) {
        const { history } = this.props;
        history.goBack();
      }
    });
  };
  navigateToPage = () => {
    this.props.history.replace(`/about?${this.state.value}`);
  };
  handleChange = (evt) => {
    this.setState({ value: evt.target.value.substr(0, 100) });
  };
  render() {
    const url = this.props.match.path.split('/:id')[0];

    let customClass =
      url === '/jgd-satsang'
        ? 'satsang'
        : url === '/badela-satsang'
        ? 'badela-satsang'
        : url === '/prarthna'
        ? 'prarthna'
        : url === '/jivani'
        ? 'jumbotron'
        : '';

    return (
      <div style={{ backgroundColor: '', width: '100%', minHeight: '700px' }}>
        <MetaDecorator
          title="swami ji satsang"
          description="swami ji satsang desc"
          imgSrc={imgUrl}
        />

        <div className={customClass}></div>
        <div
          className="container"
          style={{
            marginTop: '3%',
            'min-height': '450px',
            'margin-bottom': '2%',
          }}
        >
          <div
            className="row"
            style={{
              border: '',
              margin: 'auto',
              width: '100%',
              padding: '0% 10%',
            }}
          >
            <div className="col-sm-12">
              {!!userloginname && (
                <div>
                  <Button
                    style={{ position: 'relative', left: '5%' }}
                    variant=""
                  >
                    <Link className="" to={`/satsang/${this.getId()}`}>
                      Update Satsang
                    </Link>
                  </Button>
                  <Button
                    style={{ position: 'relative', left: '10%' }}
                    variant="danger"
                    onClick={() => {
                      this.removeSatsang(
                        `${API_URL}/satsang/delete`,
                        this.getId()
                      );
                    }}
                  >
                    Remove
                  </Button>
                </div>
              )}
              <h3></h3>
              {!this.state.isloading && (
                <div className="col-sm-12 text-center title">
                  <h5>{this.state.satsang[0].name}</h5>
                </div>
              )}

              {!this.state.isloading ? (
                <div className="contents title">
                  {this.state.satsang[0].description.split('\n').map((str) => (
                    <div
                      className={str.includes('iframe') ? 'sub-content' : ''}
                      dangerouslySetInnerHTML={{ __html: str }}
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="loader-container">
                  <CircularLoader />
                </div>
                // <Link to="/">Go to Home Page</Link>
              )}
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Jivni);
