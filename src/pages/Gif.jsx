import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

const Gif = withRouter(({ match }) => {
  return (
    <div style={{ 'background-color': '' }}>
      <script
        data-ad-client="ca-pub-3514662431507118"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>

      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: '#f1a38e',
          color: 'white',
          fontSize: '20px',
        }}
      >
        <div style={{ position: 'absolute', top: '11%', marginLeft: '7%' }}>
          जन जन मे जागरण लाना है l <br></br>तो सतगुरु के वचनों को सुनाना है l
        </div>
      </div>
      <div
        className="container"
        style={{ minHeight: '550px', marginTop: '2%' }}
      >
        हमारी TEAM लगातार GIF बनाने के काम में लगी हुई है<br></br>
        जिसके जरिये स्वामी जी महाराज के संदेशों को आम लोगों तक पहुंचाया जा सके l
        <br></br>
        भारत और अध्यात्म अपने दर्शकों से निवेदन करता है कि आप निरंतर इस page को
        visit करते रहें और GIF को अन्य गुरुभाई और अन्य लोगों तक पहुंचाने में
        सहयोग प्रदान करें l<br></br> हमारी TEAM सदेव आपका आभारी रहेगा l<br></br>
        <br></br>
        <p>
          <Link className="" to={`${match.path}/jgd`} style={{ color: 'blue' }}>
            Jaigurudev Temple GIF
          </Link>
        </p>
        <p>
          <Link
            className=""
            to={`${match.path}/sjgd`}
            style={{ color: 'blue' }}
          >
            Satguru Jaigurudev Badela dham Temple GIF
          </Link>
        </p>
        {/* <p><a href='http://story4u.info/gif/create' style={{color: 'blue'}}>Create Own GIF</a>
         
            </p>   */}
      </div>
    </div>
  );
});

export default Gif;
