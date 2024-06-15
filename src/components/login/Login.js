import React from "react";
import { withRouter } from "react-router-dom";
import {postApi} from '../../service/service';
import {API_URL} from '../../config';

import "./style.css";

let loginMsg='Please enter your email and password';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      uname: null,
      psw: null,
      isValidate: true
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangePsw = this.handleChangePsw.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeName(event) {
    this.setState({uname: event.target.value});
  }
  handleChangePsw(event) {
    this.setState({psw: event.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const { history } = this.props,
    headers= {'content-type': 'application/json'},
    body={
      email: this.state.uname,
      password: this.state.psw
    }
     postApi(`${API_URL}/api/auth/login`, headers, body)
    .then((data)=>{  
      if(data.auth){
        localStorage.setItem('login', JSON.stringify(data))
        this.setState({isValidate: true})
        history.goBack();
      }else{
        loginMsg='Either User Name or Password wrong'
        this.setState({isValidate: false})
      }
    })
  } 
  render() {
    return (
      <div className='loginContainer'>
      <div className="container">
            <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                          <p>{loginMsg}</p>
                        </div>
                        <form id="Login" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                  value={this.state.uname} 
                                  onChange={this.handleChangeName}
                                  type="text" 
                                  className="form-control" 
                                  id="inputEmail" 
                                  placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input
                                  value={this.state.psw} 
                                  onChange={this.handleChangePsw} 
                                  type="password" 
                                  className="form-control" 
                                  id="inputPassword" 
                                  placeholder="Password" />
                            </div>
                            <div className="forgot">
                            <a href="reset.html">Forgot password?</a>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
            </div>
      </div>
      </div>
    
     
    );
  }
}

export default withRouter(Login);
