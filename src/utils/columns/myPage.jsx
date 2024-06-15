import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";

function indexFormatter(cell, row, rowIndex, formatExtraData) {    
     return rowIndex + 1;
}
function nameFormatter(cell, row, rowIndex, formatExtraData) {  
    let path = `/gif/${row._id}`; 
    return <Link to={path}>{cell}</Link>;
}

export default ()=>{
    return [      
    //   {
    //     dataField: 'rownumber',
    //     text: 'SNo.',
    //     formatter: indexFormatter
    //   }, 
      {
        dataField: 'name',
        text: 'Name',
        formatter: nameFormatter
      }
    ]

}