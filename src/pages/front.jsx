import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import {Link, BrowserRouter as Router } from 'react-router-dom';

    const Front = ({ match }) => {

    return (
            <div>

                <Jumbotron title="भारत और अध्यात्म" subtitle="" />
                <div className="container" style={{backgroundColor: "", position: "static", width: "370px", "margin-left": "155px"}}>
                    <h3>महात्माओं की जीवनी</h3>
                    <div style={{position: "inherit", width: "300px", height: "200px"}}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/jivni/jaigurudev">सतगुरु जयगुरूदेव साहब की जीवनी <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">सतगुरु कबीर साहब की जीवनी</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">सतगुरु रविदास जी की जीवनी </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">गोस्वामी तुलसीदास जी की जीवनी</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">मीरा बाई जी की जीवनी</Link>
                            </li>
                        </ul>                        
                    </div>
                    <h4></h4>
                    <h3>प्रार्थना संग्रह</h3>
                    <div style={{position: "inherit", width: "300px", height: "200px"}}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">सतगुरू सतनाम, तुमको लाखों प्रणाम । <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">कोई कहियो रे गुरु आवन की ।</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">गुरू चरणों में अपने लगा लीजै । </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">छोड़ कर संसार जब तू जाएगा ।</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">धाम अपने चलो भाई। पराये देश क्यों रहना।</Link>
                        </li>
                    </ul>
                    </div>
                    <h4></h4>
                    <h3>सत्संग वचन</h3>
                    <div style={{position: "inherit", width: "300px", height: "200px"}}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">सतगुरु जयगुरूदेव साहब की जीवनी <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">सतगुरु कबीर साहब की जीवनी</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">सतगुरु रविदास जी की जीवनी </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">गोस्वामी तुलसीदास जी की जीवनी</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">मीरा बाई जी की जीवनी</Link>
                        </li>
                    </ul>
                    </div>
                </div>

            </div>



    );
}

export default Front
