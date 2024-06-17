import React, { Component } from 'react';
import sound from '../images/audioJgd.mpeg'
import pic from '../images/temple.jpg'
import bell from '../images/bell.gif';
import bellSound from '../images/bellSound.mp3'


class Story4u extends Component {
    state = {
        isTemple: true,
        name: ''
    };
    playMusic =()=> {
        setTimeout(()=>{
        document.getElementsByClassName('bell')[0].style.display= 'none';
        document.getElementsByClassName('outerText')[0].style.display= 'none';
        document.getElementsByClassName('leftImg')[0].style.width = "0px"; 
        document.getElementsByClassName('rightImg')[0].style.left = "0px"; 
        document.getElementsByClassName('rightImg')[0].style.width = "0px"; 
    },300)
        
        let soundBell = new Audio(bellSound); 
            soundBell.play();     
        let audio = new Audio(sound);
        setTimeout(()=>{audio.play()},3000)                    
    };
    handleChange =(evt)=> {
        this.setState({ name: evt.target.value.substr(0, 100) });
    };
    onSubmit =(e, url, urName)=> {
        e.preventDefault();
        // localStorage.setItem('name', urName);
        // localStorage.setItem('url', url);
        this.setState({ name: ''});
        window.location.href= url;
        

        // this.props.history.replace(localStorage.getItem('url'));
        
        // setTimeout(()=>{
        // this.props.history.replace(localStorage.getItem('url'));
            
        // },1000)
        // window.location.reload();
        
    }

    onShare =(e, url)=> {
        window.location.href= url;
        localStorage.clear();
    }
    
  render() {
    let getName, displayingName;
    if(this.props.location.search){
          getName = this.props.location.search.split('?');
          getName = decodeURI(getName[1]);
          displayingName = getName.split('-');
          displayingName = displayingName.length > 1 ? `${displayingName[0]} ${displayingName[1]}` : `${displayingName[0]}`;      
    }else{
        displayingName = `<your name>`;
    }
      let name = this.state.name.split(' '),
          nameInUri = name[1] ? `${name[0]}-${name[1]}` : `${name[0]}`,
          urName= name[1] ? `%20${name[0]}%20${name[1]}%20` : `%20${name[0]}%20`,
          navUri = `/jgd/search?${nameInUri}`,
          url= `whatsapp://send?text=तनिक%20देखो%20तो${urName}ने%20आपके%20लिए%20स्वामी%20जी%20की%20कौन%20सी%20अनमोल%20उपहार%20भेजा%20है%20l%20देखने%20के%20लिए%20Click%20करें%201👇%0A%0Ahttps%3A%2F%2Fwww.story4u.info/jgd/search?${nameInUri}`;
        //   url= `whatsapp://send?text=तनिक%20देखो%20तो${urName}ने%20आपके%20लिए%20स्वामी%20जी%20की%20कौन%20सी%20अनमोल%20उपहार%20भेजा%20है%20l%20देखने%20के%20लिए%20Click%20करें%20👇%0A%0Ahttp%3A%2F%2Fwww.story4u.info/jgd/search?${nameInUri}%0A%0Aपहली%20बार%20अपने%20किसी%20गुरु%20भाई%20ने%20स्वामी%20जी%20की%20संदेशों%20को%20लोगों%20तक%20पहुंचाने%20का%20नया%20तरीका%20निकाला%20है%20l%20इसे%20ज्यादा%20से%20ज्यादा%20शेयर%20कर%20सहयोग%20प्रदान%20करें%20l`;
      
    return(
            <div className="container-story">
             <script data-ad-client="ca-pub-3514662431507118" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     
                <div className="wrapper">
                    <div className='bell' onClick = {this.playMusic}>
                        <img src={bell} />
                    </div>
                    <div className='outerText' ><h4>मंदिर का पट खोलने के<br></br> लिए घंटा बजायें</h4></div>              
                    <div className="rightImg" >
                        <img src={pic} style={{height:'100%', width: '100%'}} />          
                                        
                    </div>
                    <div className="leftImg" >
                        <img src={pic} style={{height:'100%', width: '100%'}} />        
                                     
                    </div> 
                    <div style={{zIndex: 1 ,position: 'static', width: '100%', textAlign: 'center', top: '5%'}}>
                        {/* <a  href='http://story4u.info' style={{color: 'blue'}}>visit my home page</a> */}
                        <marquee className='marqText'  behavior="scroll" direction="left" style={{'text-shadow': '2px 1px #9E9E9E', position: 'absolute', fontSize: 'medium', width: '66%', left: '11%', top: '4%'}}>
                            <span className='marqText1'>{displayingName} की तरफ से आपको मालिक की अनमोल उपहार आया है</span>
                        </marquee>
                    </div>

                    
                    <div className='marqContainer marqContainerLeft'>
                        <marquee className='marqText'  behavior="scroll" direction="up">
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>

            
            
                        </marquee>
                    </div>
                    <div className='mainContext'> 
                        <div className='textMsg'>
                            <span className='marqTextMsg'>
                                <h4>हज़ारों चमन खिले हज़ारों बहारें आयीं <br></br>
                                लेकिन हमारे दिल में खुशियों की बहारें तभी आयीं <br></br>
                                जब स्वामी जी की मुखार बिन्दु से<br></br>
                                आवाज आयीं
                                </h4>
                            </span>
                        </div>
                        <div className='imgContainer'>
                            <div className='img1'>                            
                            </div>                            
                            <div className='img2'>                            
                            </div>
                        </div>
                        <div className='imgs'>                               
                        </div>
                        <div className='textMsg2'>
                        <span className='marqTextMsg1'>
                                <h4>बाबा जी का कहना है<br></br> शाकाहारी रहना है l <br></br></h4>         
                            </span>
                        </div>
                        <div className='img3'>                        
                        </div>
                        <div className='textMsg3'>
                            <span className='marqTextMsg1'>
                                <h4>सारे दुनिया के नर-नारी<br></br> शाकाहारी हो जाना<br></br>
                                आगे आयेगी महामारी<br></br> शाकाहारी हो जाना<br></br>
                                देखो आ गयी महामारी<br></br> शाकाहारी हो जाओ<br></br>
                                जिन जीवों को मारा तुमने<br></br> बदला मांग रहे हैं<br></br>
                                रोग-व्याधि के रूप में <br></br>तुमको सता रहे हैं<br></br>
                                कि आगे सतयुग की तैयारी <br></br>शाकाहारी हो जाना </h4>     
                            </span>
                        </div>                  

                    </div>                    
                    <div className='marqContainer marqContainerRight'>
                        <marquee className='marqText'  behavior="scroll" direction="down">
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>
                            <span className='marqText1'>J</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className="marqText1">N</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">A</span><br></br>
                            <span className="marqText4">M</span><br></br><br></br>
                            <span className="marqText5">P</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">A</span><br></br>
                            <span className="marqText3">P</span><br></br>
                            <span className="marqText4">H</span><br></br>
                            <span className="marqText5">U</span><br></br><br></br>
                            <span className="marqText1">K</span><br></br>
                            <span className="marqText3">A</span><br></br><br></br>                           
                            
                        </marquee>
                    </div>  
                                   
                </div>  
                {true ? <form onSubmit={(e)=>{this.onSubmit(e, url, nameInUri)}}>
                    <div className='nameText'>
                        <input
                            placeholder='   👉यहाँ अपना नाम लिखें....'
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                        <button type='submit'>
                            👉  शेयर करें
                        </button>
                        
                    </div> 
                </form> : <div className='shareBtn'><button  onClick={(e)=>this.onShare(e, url)}>
                            👉WhatsApp पर यहाँ देखेंं
                        </button></div>} 
                <div className='contactMe'>
                    <strong>Contact me: story4uinfo@gmail.com</strong>
                </div>              
            </div>
    )
  }
}

export default Story4u
