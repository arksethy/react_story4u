import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
  render() {
    return (
      <div style={{'background-color': ""}}>
          <div className='contactTitleContainer' style={{'width':'100%', 'height': "100px", 'backgroundColor': '#f1a38e', 'color': 'white'}}>
          <p style={{'marginLeft':'7%', fontSize: '45px'}}>Contact us</p>
          <div style={{'marginLeft':'7%', 'marginTop': '-20px'}}>Please contact me at story4uinfo@gmail.com</div></div>
            <div className="container" style={{'minHeight': "550px", marginTop: '2%'}}>
            <p>If you have any query related to Story4You (भारत और अध्यात्म) feel free to contact me by drop me email.</p>
            <p>E-Mail : story4uinfo@gmail.com</p>
            Here i am on Facebook : <a style={{color:'blue'}} href='https://www.facebook.com/KathaSanatanDharmKi' >कथा सनातन धर्म की</a><br></br><br></br>
            
            Here i am on YouTube :  <a style={{color:'blue'}} href='https://www.youtube.com/channel/UCnemw_QU3S_bH5Y2xb5KAaA' >कथा सनातन धर्म की</a>
            
            <p>If you haven't joined us, this is the right time to join us.</p>

            Here My other related websites :<br></br>
            <a href='http://www.satgurujaigurudev.org' style={{color:'blue'}}>http://www.satgurujaigurudev.org</a>
               <br></br>
               <a href='http://www.badeladham.in' style={{color:'blue'}}>http://www.badeladham.in</a>
              
          <div>
                
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
