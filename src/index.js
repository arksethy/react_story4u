import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
// import { render } from 'react-snapshot';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// render(<App />, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
