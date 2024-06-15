import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
  class ListingShows extends React.Component {    
      
     render() {
      console.log('this.props',this.props);
         let style = {
             width: '200px',
             margin: '10px 5px 0px 5px'
           };
        
           return (
              <li style={style}>
             <Link to="/testing">{this.props.label}</Link>
           </li>
             
           );
  }
}
  export default ListingShows;