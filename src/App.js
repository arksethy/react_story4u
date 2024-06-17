import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';


import './App.css';
import Login from './components/login/Login';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact';
import Disclosure from './pages/Disclosure';
import Privacy from './pages/Privacy';
import Gif from './pages/Gif';
import Jivni from './pages/jivini';
import Stori4u from './pages/Story4u';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Listing from './pages/survey/listing.js';
import Survey from './pages/survey/survey.js';
import Notfound from './pages/Notfound';
import JgdSatsangList from './pages/JgdSatsangList';
import GaneshJi from './Gif/GaneshJi';
import CreateGif from './Gif/CreateGif';
import MyPage from './pages/MyPage';
import AddUpdateSatsang from './components/satsang/AddUpdate';

function initializeReactGA() {
  ReactGA.initialize('UA-175245159-1');
  ReactGA.pageview('/homepage');
}

function initializeReactGA() {
  ReactGA.initialize('UA-175800281-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route exact path="/gif" component={Gif} />
            <Route exact path="/gif/jgd" component={Stori4u} />
            <Route exact path="/gif/jgd/:id" component={Stori4u} />
            <Route exact path="/gif/sjgd" component={GaneshJi} />
            <Route exact path="/gif/sjgd/:id" component={GaneshJi} />
            <Route exact path="/gif/create" component={CreateGif} />
            <Route exact path="/gif/:id" component={CreateGif} />
            <Route path="/myPage" component={MyPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/disclosure" component={Disclosure} />
            <Route exact path="/jgd-satsang" component={JgdSatsangList} />
            <Route exact path="/jgd-story" component={JgdSatsangList} />
            <Route exact path="/badela-satsang" component={JgdSatsangList} />
            <Route exact path="/prarthna" component={JgdSatsangList} />
            <Route exact path="/jivani" component={JgdSatsangList} />
            <Route path="/jgd-satsang/:id" component={Jivni} />
            <Route path="/badela-satsang/:id" component={Jivni} />
            <Route path="/prarthna/:id" component={Jivni} />
            <Route path="/jivani/:id" component={Jivni} />
            <Route path="/jgd-story/:id" component={Jivni} />
            <Route exact path="/satsang/add" component={AddUpdateSatsang} />
            <Route path="/satsang/:id" component={AddUpdateSatsang} />
            <Route exact path="/survey" component={Listing} />
            <Route path="/survey/:id" component={Survey} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
