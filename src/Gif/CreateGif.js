import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import {Row, Button} from 'react-bootstrap';
import {uploadFile, postApi, getApi} from '../service/service';
import {API_URL, GIF_Id} from '../config';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import style from './style.css';

const fabric = require("fabric").fabric,
    login = JSON.parse(localStorage.getItem('login')),
    token = login && login.token,
    userloginname = login && login.loginUser,
    role = login && login.role;


class CreateGif extends Component {
    state={
        gifName: null,
        isLoadingGif: true,
        gif: null,
        gifInstance: null,
        isRender: false,
        scrollText: 'Sample Text',
        outerFile: null,
        audioFile: null,
    }

    componentDidMount(){
        this.canvas = new fabric.Canvas("c")
        document
              .getElementById("hiddenFileUpload")
              .addEventListener("change", this.uploadFiles);
        document
              .getElementById("hiddenAudioFileUpload")
              .addEventListener("change", this.uploadAudioFiles);
        document
              .getElementById("hiddenOuterFileUpload")
              .addEventListener("change", this.uploadOuterFiles);
        this.getGif();      
    }

    getGif=()=>{       
     
      let header = {
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json',
      },
      paramId = this.props.match.params.id || GIF_Id;
                  
      getApi(`${API_URL}/gif/${paramId}`, header)
        .then((data)=>{  
          if(data && data.status && data.data && data.data.length){
            this.setState({isLoadingGif: false, gif: data.data, 
                          gifInstance: data.data[0].gifInstance,
                        gifName: data.data[0].name})
              // this.props.onHide();                
            // this.addNewImageElement(data.data.url)
          }
        })
  } 

    addUpdateGif=(e)=>{   
      let id = this.props.match.params.id || null; 
     
      let header = {
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json',
      },
      body = {
        gifId: role === 'superAdmin' ? GIF_Id : id,
        name: role === 'superAdmin' ? 'Enter Gif Name...' : this.state.gifName,
        gifInstance: this.canvas.toJSON().objects,
        outerFile: this.state.outerFile,
        audio: this.state.audioFile,
        user: userloginname
      };
                  
      postApi(`${API_URL}/gif/addUpdate`, header, body)
        .then((data)=>{  
          console.log('',role !== 'superAdmin', data)
          if(data && data.status && role != 'superAdmin'){
            const { history } = this.props;
            history.push("/myPage");
              // this.props.onHide();                
            // this.addNewImageElement(data.data.url)
          }else{
              // this.setState({isProductCreated: false})
          }
        })
  } 



    uploadFiles=(e)=>{       
      let formData = new FormData();      
      formData.append('username', userloginname)
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
          formData.append(`file`, files[i])
      }
     
      let header = {
           Authorization: `Bearer ${token}`,
           accept: 'application/json',
           'Accept-Language': 'en-US,en;q=0.8',
           'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      };
                  
        uploadFile(`${API_URL}/upload`, header, formData)
        .then((data)=>{  
          if(data && data.data){              
              this.addNewImageElement(data.data.url);
          }else{
              // this.setState({isProductCreated: false})
          }
        })


  } 

  uploadAudioFiles=(e)=>{       
    let formData = new FormData();      
    formData.append('username', userloginname)
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
        formData.append(`file`, files[i])
    }
   
    let header = {
         Authorization: `Bearer ${token}`,
         accept: 'application/json',
         'Accept-Language': 'en-US,en;q=0.8',
         'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    };
                
      uploadFile(`${API_URL}/upload`, header, formData)
      .then((data)=>{  
        if(data && data.data){
            // this.props.onHide(); 
            this.setState({audioFile: data.data.url})
            const audio = new Audio(data.data.url);
            audio.play();
            // let audio = data.data.url.split('.');
            // if(audio[1]=='mp3'){
             
            // }             
        }else{
            // this.setState({isProductCreated: false})
        }
      })


} 

  uploadOuterFiles=(e)=>{       
    let formData = new FormData();      
    formData.append('username', userloginname)
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
        formData.append(`file`, files[i])
    }
   
    let header = {
         Authorization: `Bearer ${token}`,
         accept: 'application/json',
         'Accept-Language': 'en-US,en;q=0.8',
         'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    };
                
      uploadFile(`${API_URL}/upload`, header, formData)
      .then((data)=>{  
        if(data && data.data){
            // this.props.onHide(); 
            this.setState({outerFile: data.data.url})
        }else{
            // this.setState({isProductCreated: false})
        }
      })


} 


    generateUniqueString=()=> {
        function makeId(length) {
          let result = "";
          const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          const charactersLength = characters.length;
          for (let i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }
          return result;
        }
        const uniqueId = `${makeId(
          10
        )}_${new Date().getUTCMilliseconds()}_${Math.floor(
          Math.random() * 100000
        )}`;
        return uniqueId;
      }
    
      
      
      
    
      addTextElement=()=> {          
        const textElement = new fabric.IText("Hello World", {
          left: 100,
          top: 100,
          fontSize: 25,
          id: this.generateUniqueString(),
        });
          this.canvas.centerObject(textElement);
          this.canvas.add(textElement);
          this.canvas.bringToFront(textElement);
          this.canvas.setActiveObject(textElement);
          textElement.selectAll();
                
        // this.canvas.renderAll();
        // textElement.enterEditing();
      }

      addTextElementPreFilled(text,obj) {
        const textElement = new fabric.IText('',obj);
        this.canvas.add(textElement);        
        this.canvas.bringToFront(textElement);
        // this.canvas.setActiveObject(textElement);
        textElement.selectAll();
        this.canvas.renderAll();
        // textElement.enterEditing();
      }
    
      prefilledImageElement(url, obj) {
        fabric.Image.fromURL(url, img => {
          var oImg = img.set(obj);
          this.canvas.add(oImg);
          this.canvas.renderAll();
        },{ crossOrigin: 'anonymous'});        
      }

      addNewImageElement(url) {
        fabric.Image.fromURL(url, img => {
          var oImg = img.set({left: 100, top: 100});
          this.canvas.centerObject(oImg);
          this.canvas.add(oImg);
          this.canvas.setActiveObject(oImg);
          this.canvas.renderAll();
        },{ crossOrigin: 'anonymous'});            
      }
    
      deleteActiveObject=()=> {
        const activeObject = this.canvas.getActiveObject();
        if (activeObject) return this.canvas.remove(activeObject);        
        return null;
      }

      onClickFileUpload() {
        document.getElementById("hiddenFileUpload").click();
      }
      onClickAudioFileUpload() {
        document.getElementById("hiddenAudioFileUpload").click();
      }
      onClickOuterFileUpload() {
        document.getElementById("hiddenOuterFileUpload").click();
      }
    
      selectNewcolor(nC) {
        const { image, name } = this.props.data.variants.find(
          each => each.name === nC
        );
        this.props.selectNewColor(image, name);
      }
    
      addText=(e)=> {
        e.preventDefault();
        this.addTextElement();
      }

      setFont(font) {
        let activeObject = this.canvas.getActiveObject();
        if (activeObject && activeObject.type === "i-text") {
          activeObject.fontFamily = font;
          this.canvas.renderAll();
        }
      }
    
      setBold=()=> {
        let activeObject = this.canvas.getActiveObject();
        if (activeObject && activeObject.type === "i-text") {
          let property = `${activeObject.id}_bold`;
          this.setState(
            prevState => {
              return {
                ...prevState,
                [property]: !prevState[property],
              };
            },
            () => {
              activeObject.fontWeight = this.state[property] ? "bold" : "";
              this.canvas.renderAll();
            }
          );
        }
      }
    
      setItalic() {
        let activeObject = this.canvas.getActiveObject();
        if (activeObject && activeObject.type === "i-text") {
          let property = `${activeObject.id}_italic`;
          this.setState(
            prevState => {
              return {
                ...prevState,
                [property]: !prevState[property],
              };
            },
            () => {
              activeObject.fontStyle = this.state[property] ? "italic" : "";
              this.canvas.renderAll();
            }
          );
        }
      }
    
      setTextColor(color) {
        let activeObject = this.canvas.getActiveObject();
        if (activeObject && activeObject.type === "i-text") {
          activeObject.set("fill", color);
          this.canvas.renderAll();
        }
      }

  
   
  render() {     
    let scrollText = this.state.scrollText.split(''),
      suffix = 0;
    if(!this.state.isRender){
      if(!this.state.isLoadingGif && this.state.gifInstance && !!this.state.gifInstance.length){
      this.setState({isRender: true})
        
        setImmediate(()=>{
              this.state.gifInstance.forEach((row)=>{
                  if(row.type=='i-text'){
                      const obj = {
                          "type": row.type,                        
                          "originX": row.originX,
                          "originY": row.originY,
                          "left": row.left,
                          "top": row.top,
                          "width": row.width,
                          "height": row.height,
                          "fill": row.fill,
                          "stroke": row.stroke,
                          "strokeWidth": row.strokeWidth,
                          "strokedasharray": row.strokedasharray,
                          "strokelinecap": row.strokelinecap,
                          "strokedashoffset": row.strokedashoffset,
                          "strokelinejoin": row.strokelinejoin,
                          "strokemiterlimit": row.strokemiterlimit,
                          "scaleX": row.scaleX,
                          "scaleY": row.scaleY,
                          "angle": row.angle,
                          "flipX": row.flipX,
                          "flipY": row.flipY,
                          "opacity": row.opacity,
                          "shadow": row.shadow,
                          "visible": row.visible,
                          "backgroundColor": row.backgroundColor,
                          "fillRule": row.fillRule,
                          "paintFirst": row.paintFirst,
                          "globalCompositeOperation": row.globalCompositeOperation,
                          "skewX": row.skewX,
                          "skewY": row.skewY,
                          "text": row.text,
                          "fontSize": row.fontSize,
                          "fontWeight": row.fontWeight,
                          "fontFamily": row.fontFamily,
                          "fontStyle": row.fontStyle,
                          "lineHeight": row.lineHeight,
                          "underline": row.underline,
                          "overline": row.overline,
                          "linethrough": row.linethrough,
                          "textalign": row.textalign,
                          "textBackgroundColor": row.textBackgroundColor,
                          "charspacing": row.charspacing                       
                      }
                      
                this.addTextElementPreFilled('', obj);
                  }
                  if(row.type=='image'){
                      const objImg = {
                          "type": row.type,                        
                          "originX": row.originX,
                          "originY": row.originY,
                          "left": row.left,
                          "top": row.top,
                          "width": row.width,
                          "height": row.height,
                          "fill": row.fill,
                          "stroke": row.stroke,
                          "strokeWidth": row.strokeWidth,
                          "strokedasharray": row.strokedasharray,
                          "strokelinecap": row.strokelinecap,
                          "strokedashoffset": row.strokedashoffset,
                          "strokelinejoin": row.strokelinejoin,
                          "strokemiterlimit": row.strokemiterlimit,
                          "scaleX": row.scaleX,
                          "scaleY": row.scaleY,
                          "angle": row.angle,
                          "flipX": row.flipX,
                          "flipY": row.flipY,
                          "opacity": row.opacity,
                          "shadow": row.shadow,
                          "visible": row.visible,
                          "backgroundColor": row.backgroundColor,
                          "fillRule": row.fillRule,
                          "paintFirst": row.paintFirst,
                          "globalCompositeOperation": row.globalCompositeOperation,
                          "skewX": row.skewX,
                          "skewY": row.skewY,
                          "cropX": row.cropX,
                          "cropY": row.cropY,
                          "src": row.src,
                          crossOrigin: "Anonymous",
                          "filters": row.filters                                                      
                      }
                this.prefilledImageElement(row.src, objImg);

                  }
                })
  })  
}

      
  }

    return (
        <div style={{'background-color': "", }}>     
          <Navbar />
          <div style={{height: '1100px'}}>
          <div style={{position: 'relative'}}>
          <input
            type="file"
            id="hiddenFileUpload"
            accept="image/*"
            style={{ display: "none" }}
          />
          <input
            type="file"
            id="hiddenAudioFileUpload"
            accept="image/*"
            style={{ display: "none" }}
          />
          <input
            type="file"
            id="hiddenOuterFileUpload"
            accept="image/*"
            style={{ display: "none" }}
          />
          <Row>
            <Button
              variant="success"
              onClick={this.addText}
            >
              Add Text
            </Button>
            
            <Button
              variant="success"
              onClick={() => {
                this.onClickFileUpload();
              }}
            >
              Upload Image
            </Button>
            <Button
              variant="success"
              onClick={() => {
                this.onClickAudioFileUpload();
              }}
            >
              Upload Audio
            </Button>
            <Button
              variant="success"
              // className="btn btn-success btn-block"
              onClick={this.deleteActiveObject}
            >
              Delete Active Object
            </Button>                
            
            {/* <Button
              variant="success"
              // className="btn btn-success btn-block"
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => {
                this.previewData();
              }}
            >
              Preview Data
            </Button> */}

            <Button
              variant="success"
              // className="btn btn-success btn-block"
              data-toggle="modal"
              onClick={this.addUpdateGif} >           
            
              Save Data
            </Button>
          </Row>
          <Row>
          <div
            class="btn-group dropdown inline pull-left"
            id="texteditor"
            style={{ display: "block", float: "left" }}
          >
            <button
              id="font-family"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              title="Font Style"
            >
              Fonts
            </button>
            <ul
              class="dropdown-menu"
              role="menu"
              aria-labelledby="font-family-X"
            >
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Arial");
                  }}
                  class="Arial"
                >
                  Arial
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Helvetica");
                  }}
                  class="Helvetica"
                >
                  Helvetica
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Myriad Pro");
                  }}
                  class="MyriadPro"
                >
                  Myriad Pro
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Delicious");
                  }}
                  class="Delicious"
                >
                  Delicious
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Verdana");
                  }}
                  class="Verdana"
                >
                  Verdana
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Georgia");
                  }}
                  class="Georgia"
                >
                  Georgia
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Courier");
                  }}
                  class="Courier"
                >
                  Courier
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Comic Sans MS");
                  }}
                  class="ComicSansMS"
                >
                  Comic Sans MS
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Impact");
                  }}
                  class="Impact"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  tabindex="-1"
                  onClick={() => {
                    this.setFont("Monaco");
                  }}
                  class="Monaco"
                >
                  Monaco
                </a>
              </li>
            </ul>
            <Button
              variant="success"
              onClick={() => {
                this.setBold();
              }}
            >
              Bold
            </Button>
            <Button
              variant="success"
              onClick={() => {
                this.setItalic();
              }}
            >
              Italic
            </Button>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#ff0000"
              onChange={e => {
                this.setTextColor(e.target.value);
              }}
            /> 
            </div>
            <div>
              <label for="name" style={{position: 'relative', left: '10%'}}>
                  <b>Gif Name</b>
              </label>
              <input required
                      placeholder='Gif Name' 
                      style={{width: '180px', height: '33px', position: 'relative', left: '19%'}}                                    
                      value={this.state.gifName} 
                      onChange={(e)=>{this.setState({gifName: e.target.value})}} 
                      />
            </div>
            <div>
              <label for="name" style={{position: 'relative', left: '10%'}}>
                  <b>Scroll Text</b>
              </label>
              <input required
                      placeholder='Gif Name' 
                      style={{width: '180px', height: '33px', position: 'relative', left: '19%'}}                                    
                      value={this.state.scrollText} 
                      onChange={(e)=>{this.setState({scrollText: e.target.value})}} 
                      />
            </div>
            <Button
              variant="success"
              onClick={() => {
                this.onClickOuterFileUpload();
              }}
            >
              Upload Outer Img
            </Button>
          </Row>
        </div>
              <div style={{position: 'absolute', border: '0px solid', top: '40%', left: '1%', 
                  marginBottom: '5%'}}>
                   {/* <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
        pan={{disabled: this.state.pan}}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools" style={{position: 'absolute', top: '-7%', left:'40%'}}>
              <button onClick={zoomIn}>Zoom In</button>
              <button onClick={zoomOut}>Zoom Out</button>
              <button onClick={resetTransform}>Reset</button>
              <button onClick={()=>{this.setState({pan: !this.state.pan})}}>pan</button>
            </div>
            <TransformComponent> */}
                   
            <div id="frontOuterDiv" className="canvas-main-div"
                    style={{left: '2%', top: '2%', border: '1px solid black',
                    // backgroundImage: `url(${this.state.selectedImg})`,
                    // backgroundRepeat: 'no-repeat',
                    // background: 'red',
                    height: `728px`,
                    width: `352px`,
                    // backgroundSize: '100%'
                }}
                    >
                      <div className='marqContainer marqContainerLeft'>
                        <marquee className='marqText'  behavior="scroll" direction="up">
                          {scrollText.map((text)=>{
                            suffix = suffix > 4 ? 1 : suffix + 1;
                            return <span className={`marqText${suffix}`}>{text}<br></br></span>
                          })}                            
                        </marquee>
                      </div>
                      <div className='marqContainer marqContainerRight'>
                        <marquee className='marqText'  behavior="scroll" direction="down">
                          {scrollText.map((text)=>{
                            suffix = suffix > 4 ? 1 : suffix + 1;
                            return <span className={`marqText${suffix}`}>{text}<br></br></span>
                          })}                            
                        </marquee>
                      </div>      
                <div style={{position: 'absolute',
                left: `15%`, top: `6%`
            }}>
                    <canvas
                        id="c"
                        style={{border: "1px solid"
                                }}
                                height={650}
                                width={250}
                    />
                </div>                 
               
              </div>
              
              {/* </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>                 */}

                
                
                
                 </div>
              {/* <div className='imgLeft' style={{top: 0, display: 'block', position: 'fixed', zIndex: 3, width: '100%', height: '100%'}}>   
                {this.state.gif && <img src={this.state.gif[0].outerFile} style={{ width: '100%', height: '100%'}} /> }                            
            </div>
            <div className='imgRight' style={{top: 0, display: 'block', position: 'fixed', zIndex: 3, width: '100%', height: '100%'}}>   
                {this.state.gif && <img src={this.state.gif[0].outerFile} style={{height:'100%', width: '100%'}} />}                          
            </div> */}
          </div>
          <Footer />
        </div>
    )
  }
}
export default CreateGif;