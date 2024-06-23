import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Dropdown from '../../utils/Dropdown';
import { Button } from 'react-bootstrap';
import { postApi, getApi } from '../../service/service';
import { API_URL } from '../../config';
import CircularLoader from '../common/loader/loader';

import style from './style.css';

const login = JSON.parse(localStorage.getItem('login')),
  token = login && login.token,
  userloginname = login && login.loginUser,
  role = login && login.role;

class AddUpdate extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    selectedCategory: 0,
    isMenuSelected: true,
    options: [
      { id: 0, name: 'select' },
      { id: 8, name: 'नवीन सुचनाये' },
      { id: 1, name: 'स्वामी जी सत्संग' },
      { id: 2, name: 'बड़ेला-धाम सत्संग' },
      { id: 11, name: 'world message' },
      { id: 3, name: 'प्रार्थना संग्रह' },
      { id: 4, name: 'कहानियां' },
      { id: 5, name: 'जीवन-परिचय' },
      { id: 6, name: 'बड़ेला-धाम परिचय' },
      { id: 7, name: 'निज अंतर-अनुभव' },
      { id: 9, name: 'स्वामी जी फोटो गैलरी' },
      { id: 10, name: 'बड़ेला-धाम फोटो गैलरी' },
    ],
    isLoading: true,
  };

  componentDidMount() {
    if (this.props.location.pathname == '/satsang/add') {
      this.setState((presstate) => ({
        ...presstate,
        isLoading: false,
      }));
    } else {
      this.getSatsang(`${API_URL}/satsang/${this.getId()}`);
    }
  }

  getId = () => {
    const id = this.props.location.pathname.split('/');
    return id[2];
  };

  getSatsang = (apiUrl) => {
    let header = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    getApi(apiUrl, header).then(({ data } = {}) => {
      if (data && data.length) {
        this.setState({
          id: data[0]._id,
          name: data[0].name,
          description: data[0].description,
          selectedCategory: data[0].category,
          isLoading: false,
        });
      }
    });
  };

  post = (e) => {
    if (this.state.selectedCategory == 0) {
      this.setState({ isMenuSelected: false });
      return;
    }
    this.setState({ isMenuSelected: true });

    let header = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body = {
        id: this.state.id || null,
        name: this.state.name,
        description: this.state.description,
        user: userloginname,
        //   user: 'arksethy@gmail.com',
        category: this.state.selectedCategory,
      };
    postApi(`${API_URL}/satsang/addUpdate`, header, body).then((data) => {
      if (data.status) {
        //   this.setState({isProductCreated: true})
        const { history } = this.props;
        history.goBack();
      } else {
        // this.setState({isProductCreated: false})
      }
    });
  };

  cancel = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    let validateMenu = this.state.isMenuSelected ? '' : 'validate';
    return (
      <div style={{ minHeight: '700px' }}>
        {this.state.isLoading ? (
          <div className="loader-container">
            <CircularLoader />
          </div>
        ) : (
          <div style={{ position: 'relative', marginLeft: '11%' }}>
            <div className={validateMenu}>
              <label for="Category" style={{ marginRight: '126px' }}>
                <b>Category</b>
              </label>
              <Dropdown
                style={{ border: '1px solid' }}
                options={this.state.options}
                value={this.state.selectedCategory}
                onChange={(e) => {
                  console.log(e.target.value);
                  this.setState({
                    selectedCategory: e.target.value,
                    isMenuSelected: true,
                  });
                }}
                // style={{position: 'absolute', left: '33%', top: '15%'}}
              />
            </div>
            <div style={{ margin: '3% 0% 4% 0%' }}>
              <label for="price" style={{ marginRight: '126px' }}>
                <b>Heading</b>
              </label>
              <input
                // style={{padding: '1%', position: 'absolute', left: '3%', top:'0'}}
                style={{ width: '190px', height: '39px', border: '1px solid' }}
                placeholder="Enter Heading.."
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
            </div>
            <div>
              <label for="price" style={{ marginRight: '87px' }}>
                <b>Post</b>
              </label>
              <textarea
                rows="20"
                cols="30"
                style={{ border: '1px solid' }}
                // style={{padding: '1%', position: 'absolute', left: '38%', top:'0'}}
                placeholder="Write Something.."
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
              />
            </div>
            <div
              style={{ position: 'relative', left: '0%', marginBottom: '30px' }}
            >
              <Button
                style={{ width: '83px', height: '35px', marginRight: '87px' }}
                variant="success"
                onClick={this.cancel}
              >
                Cancel
              </Button>

              <Button
                style={{ width: '83px', height: '35px' }}
                variant="success"
                onClick={this.post}
              >
                Post
              </Button>
            </div>
            <div
              style={{ position: 'relative', left: '1%', marginBottom: '30px' }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(AddUpdate);
