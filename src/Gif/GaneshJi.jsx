import React, { Component } from 'react';
import SatgurTumhari from '../images/satgurutumhariyade.mpeg';
import sound from '../images/audioJgd.mpeg'
import pic from '../images/maingate.jpeg';
import AnterghatGate from '../images/anterghat-gate.jpeg';
import AkhandeshwarTemple from '../images/akhandeshwar-temple.jpeg';
import AkhandeswarSwami from '../images/akhandeswar-swami.jpeg';
import Anterghat from '../images/anterghat.jpeg';
import SwamijiInsideKuti from '../images/swamiji-inside-kuti.jpeg';
import Kuti from '../images/kuti.jpeg';
import bell from '../images/bell.gif';
import bellSound from '../images/bellSound.mp3';
import Sankhnad from '../images/sankhnad.mp3'
import Hanumanji from '../images/hanuman-ji.gif';
import Rose from '../images/rose.jpg';//

import '../components/Gif.css';

const audio = new Audio(SatgurTumhari);


class GaneshJi extends Component {
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
        
        setTimeout(()=>{audio.play()},3000)                    
    };

    openAnterghatTemple =()=> {
        let sankhnad = new Audio(Sankhnad); 
        audio.pause();
        setTimeout(()=>{
            if(sankhnad.ended){
                audio.play()
            }
            // audio.play()
        },8000)
        sankhnad.play(); 
        document.getElementsByClassName('textAnterghat')[0].style.display= 'none';
        document.getElementsByClassName('anterghat-hiden-div')[0].style.display = "none";
        
        document.getElementsByClassName('hanumanji')[0].style.opacity = "0.9";
        setTimeout(()=>{
        // document.getElementsByClassName('bell')[0].style.display= 'none';
        document.getElementsByClassName('imgLeft')[0].style.width = "0px"; 
        document.getElementsByClassName('imgRight')[0].style.left = "0px"; 
        document.getElementsByClassName('imgRight')[0].style.width = "0px"; 
        document.getElementsByClassName('hanumanji')[0].style.opacity = "0";

    },5000)          
                          
    };

    openAkhandeswarTemple=()=> {
        let sankhnad = new Audio(Sankhnad); 
        audio.pause();
        setTimeout(()=>{audio.play()},7000)
        sankhnad.play(); 
        document.getElementsByClassName('textAnterghat')[1].style.display= 'none';
        document.getElementsByClassName('akhandeswar-hiden-div')[0].style.display = "none";
        
        document.getElementsByClassName('hanumanji')[1].style.opacity = "0.9";
        document.getElementsByClassName('hanumanji')[2].style.opacity = "0.9";
        setTimeout(()=>{
        // document.getElementsByClassName('bell')[0].style.display= 'none';
        document.getElementsByClassName('imgLeft')[1].style.width = "0px"; 
        document.getElementsByClassName('imgRight')[1].style.left = "0px"; 
        document.getElementsByClassName('imgRight')[1].style.width = "0px"; 
        document.getElementsByClassName('hanumanji')[1].style.opacity = "0";
        document.getElementsByClassName('hanumanji')[2].style.opacity = "0";
    },5000)                                   
    };

    openDivyaKuti=()=> {
        let sankhnad = new Audio(Sankhnad); 
        audio.pause();
        setTimeout(()=>{audio.play()},7000)
        sankhnad.play(); 
        document.getElementsByClassName('textAnterghat')[2].style.display= 'none';
        document.getElementsByClassName('divya-kuti-hiden-div')[0].style.display = "none";
        
        // document.getElementsByClassName('hanumanji')[1].style.opacity = "0.9";
        // document.getElementsByClassName('hanumanji')[2].style.opacity = "0.9";
        setTimeout(()=>{
        // document.getElementsByClassName('bell')[0].style.display= 'none';
        document.getElementsByClassName('imgLeft')[2].style.width = "0px"; 
        document.getElementsByClassName('imgRight')[2].style.left = "0px"; 
        document.getElementsByClassName('imgRight')[2].style.width = "0px"; 
        // document.getElementsByClassName('hanumanji')[1].style.opacity = "0";
        // document.getElementsByClassName('hanumanji')[2].style.opacity = "0";
    },1000)                                   
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
          url= `whatsapp://send?text=तनिक%20देखो%20तो${urName}ने%20आपके%20लिए%20स्वामी%20जी%20की%20कौन%20सी%20अनमोल%20उपहार%20भेजा%20है%20l%20देखने%20के%20लिए%20Click%20करें%20l👇%0A%0Ahttp%3A%2F%2Fwww.story4u.info/sjgd/search?${nameInUri}`;
      
      
    return(
            <div className="container-story">
             <script data-ad-client="ca-pub-3514662431507118" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     
                <div className="wrapper"  >
                <div style={{display:''}}>
                    <div className='bell' onClick = {this.playMusic} style={{top:'38%', position: 'fixed'}}>
                        <img src={bell} />
                    </div>
                    <div className='outerText' style={{position: 'fixed'}}><h4>अंदर प्रवेश करने के<br></br> लिए घंटा बजायें</h4></div>              
                    <div className="rightImg" style={{position: 'fixed'}}>
                        <img src={pic} style={{height:'100%', width: '100%'}} />          
                                        
                    </div>
                    <div className="leftImg" style={{position: 'fixed'}}>
                        <img src={pic} style={{height:'100%', width: '100%'}} />        
                                     
                    </div> 
                    </div>
                    <div style={{zIndex: 1 ,position: 'static', width: '100%', textAlign: 'center', top: '5%'}}>
                        {/* <a  href='http://story4u.info' style={{color: 'blue'}}>visit my home page</a> */}
                        <marquee className='marqText'  behavior="scroll" direction="left" style={{'text-shadow': '2px 1px #9E9E9E', position: 'absolute', fontSize: 'medium', width: '66%', left: '11%', top: '4%'}}>
                            <span className='marqText1'>{displayingName} की तरफ से आपको मालिक की अनमोल उपहार आया है</span>
                        </marquee>
                    </div>

                     <div className='mainContext' style={{top: '10%'}}> 
                        
                        <div className='hanumanji'>
                            <img src={Hanumanji} style={{height:'40%', width: '30%'}} />
                        </div>
                        <div className='imgLeft' style={{display: 'block',position: 'absolute'}}>   
                        <img src={AnterghatGate} style={{height:'40%', width: '100%'}} />                             
                        </div>
                        <div className='imgRight' style={{display: 'block', position: 'absolute'}}>   
                        <img src={AnterghatGate} style={{height:'62%', width: '100%'}} />                             
                        </div>
                        <div className='anterghat-hiden-div' onClick={this.openAnterghatTemple} 
                            style={{top: '24%', left: '20%',width: '226px', height:'277px', background: 'transparent',zIndex: 2, display: 'block', position: 'absolute'}}>   
                        </div>
                        <div className='textAnterghat outerText'  style={{top: '25%', color: 'white', width: '100%', textAlign: 'center',position: 'absolute', zIndex: 1, transform: 'rotate(2deg)'}}>
                            <h4>अन्तर्घट मन्दिर में प्रवेश करने<br></br> के लिए गेट को स्पर्श करें</h4>
                        </div>
                        <div className='' style={{display: 'contents', position: 'absolute', zIndex: '-1'}}>   
                        <img src={Anterghat} style={{height:'62%', width: '100%'}} />                             
                        </div>
                        <div className='outerText' style={{position: 'relative', top: '2%', zIndex:0, textAlign:'center', margin: 'auto', width: 'max-content'}}>
                        <span className='marqTextMsg1'>
                        <h4>जन जन मे जागरण लाना है l <br></br>तो सतगुरु के वचनों को सुनाना है l </h4>        
                            </span>
                        </div>
                        <div className='textAnterghat outerText' style={{top: '80%', color: 'white', width: '100%', textAlign: 'center',position: 'absolute', zIndex: 1}}>
                            <h4>गुम्बद को स्पर्श करें</h4>
                        </div>
                        <div className='imgLeft'  style={{height: '67%', top: '72%', display: 'block', position: 'absolute'}}>   
                        <img src={AkhandeshwarTemple} style={{height:'60%', width: '100%'}} />                             
                        </div>
                        <div className='imgRight'  style={{height: '67%', top: '72%', display: 'block', position: 'absolute'}}>   
                        <img src={AkhandeshwarTemple} style={{height:'60%', width: '100%'}} />                             
                        </div>
                        <div className='akhandeswar-hiden-div' onClick={this.openAkhandeswarTemple} 
                        style={{top: '76%', left: '20%',width: '226px', height:'118px', background: 'transparent',zIndex: 2, display: 'block', position: 'absolute'}} >   
                        </div>
                        <div className='hanumanji' style={{top: '83%', left: '10%', width: '38%'}}>
                            <img src={Hanumanji} style={{height:'40%', width: '30%'}} />
                        </div>
                        <div className='hanumanji' style={{transform: 'rotatey(180deg)', top: '83%', right: '10%', width: '38%'}}>
                            <img src={Hanumanji} style={{height:'40%', width: '30%'}} />
                        </div>
                        <div className='' style={{zIndex: -1, height: 'auto', top: '72%', display: 'block', position: 'absolute'}}>   
                        <img src={AkhandeswarSwami} style={{height:'72%', width: '100%'}} />                             
                        </div>
                        <div className='outerText' style={{position: 'absolute', left: '20%', top: '99%', zIndex:-1, textAlign:'center', margin: 'auto', width: 'max-content'}}>
                        <span className='marqTextMsg1'>
                        <h4>अखण्डेश्वर मंदिर में भजन करते <br></br> सतगुरु के बच्चे l</h4>        
                            </span>
                        </div>
                        <div className='outerText' style={{position: 'relative', top: '44%', zIndex:0, textAlign:'center', margin: 'auto', width: 'max-content'}}>
                        <span className='marqTextMsg1'>
                        <h4>शाकाहार अपनाना है पापाचार मिटाना है <br></br>अपने सतगुरु के वचनों पे चल के<br></br>
                         पूरे देश को जगाना है l</h4>        
                            </span>
                        </div>                        
                        <div className='imgLeft'  style={{height: '49%', top: '126%', display: 'block', position: 'absolute'}}>   
                        <img src={Kuti} style={{height:'62%', width: '100%'}} />                             
                        </div>
                        <div className='imgRight'  style={{height: '49%', top: '126%', display: 'block', position: 'absolute'}}>   
                        <img src={Kuti} style={{height:'62%', width: '100%'}} />                             
                        </div>
                        <div className='divya-kuti-hiden-div' onClick={this.openDivyaKuti} 
                        style={{top: '142%', left: '41%',width: '57%', height:'auto', background: 'transparent',zIndex: 0, display: 'block', position: 'absolute'}} >   
                        <img src={Rose} style={{height:'auto', width: '25%'}} />
                        </div>
                        <div className='' style={{zIndex: -1, height: 'auto', top: '126%', display: 'block', position: 'absolute'}}>   
                        <img src={SwamijiInsideKuti} style={{height:'62%', width: '100%'}} />                             
                        </div>
                        <div className='textAnterghat outerText' style={{top: '151%', color: 'white', width: '100%', textAlign: 'center',position: 'absolute', zIndex: 1}}>
                            <h4>गुलाब को स्पर्श करें</h4>
                        </div>
                        
                                    
                        

                    </div> 
                    <div className='marqContainer marqContainerLeft'>
                        <marquee className='marqText'  behavior="scroll" direction="up">
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                              
            
                        </marquee>
                    </div>
                                       
                    <div className='marqContainer marqContainerRight'>
                        <marquee className='marqText'  behavior="scroll" direction="down">
                            
                            <span className='marqText1'>J</span><br></br><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">I</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br>
                            <span className="marqText3">D</span><br></br>
                            <span className="marqText4">E</span><br></br>
                            <span className="marqText5">V</span><br></br><br></br>
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>
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
                            <span className='marqText1'>S</span><br></br>
                            <span className='marqText2'>A</span><br></br>
                            <span className="marqText3">T</span><br></br>
                            <span className="marqText4">G</span><br></br>
                            <span className="marqText5">U</span><br></br>
                            <span className="marqText1">R</span><br></br>
                            <span className="marqText2">U</span><br></br><br></br>                          
                            
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
                {/* <div className='contactMe'>
                    <strong>Contact me: story4uinfo@gmail.com</strong>
                </div>               */}
            </div>
    )
  }
}

export default GaneshJi
