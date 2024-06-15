import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import {postApi} from '../service/service';
import {API_URL} from '../config';
import column from '../utils/columns/myPage';

const login = JSON.parse(localStorage.getItem('login')),
    token = login && login.token,
    userloginname = login && login.loginUser,
    role = login && login.role;


class MyPage extends Component {
    state={
        isGifListLoading: true,
        gifList: null
    }

    componentDidMount(){
        this.getGif(`${API_URL}/gif/list`)
    }


    getGif(apiUrl){
        let header = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
       },
        body={
            user: userloginname
        }
        postApi(apiUrl, header, body)
        .then((data)=>{   
            console.log('data-----',data.data)
            this.setState({gifList: data.data})
        })
      }

  
   
  render() {     
    let gifList = this.state.gifList || []; 

    return (
        <div style={{'background-color': ""}}>
        <script data-ad-client="ca-pub-3514662431507118" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     
          
          <div className="container" style={{'minHeight': "550px", marginTop: '2%'}}>
           {<BootstrapTable  
                    keyField='_id' 
                    data={ gifList } 
                    columns={ column() } />}
          </div>
        </div>
      );
   }
}

export default MyPage
