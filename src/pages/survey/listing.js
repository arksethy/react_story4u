import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron.jsx';
import {API_URL} from '../../config.js';
import CircularLoader from '../../components/common/loader/loader.jsx';


class Listings extends Component {

    state = {
        isLoading: true,
        data: null
    };

    componentDidMount(){
        const apiUrl =`${API_URL}/servey/listings`;
        fetch(apiUrl)
            .then((res)=> res.json())
            .then((data)=> {                
                this.setState({data: data})
                this.setState({isLoading: false})
            })

    }    

    render() {
        const {match} = this.props;
        let items = [];

        if(!this.state.isLoading){
            this.state.data.map(({_id, title}, index) =>{
                items.push(
                        <div key={_id.toString()} style={{'margin-bottom': '2px'}}>
                            <Link to={`${match.url}/${_id}`}>{index+1}. {title}</Link>                  
                        </div>

                )}
            );
        }
  

  return(
      <div style={{minHeight: '700px'}}>
          <Jumbotron title="Servey" subtitle=""/>
          {this.state.isLoading ? <div className="loader-container">
                  <CircularLoader />
                </div> : <div className="container" style={{'min-height': '400px', 'font-size': 'larger', 'line-height': '30px'}}>
              <h5>Let's Do Survey</h5>
              {items}
          </div>}
      </div>
  )
}
}

export default Listings