import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Page0 from './Page0';
import Page1 from './Page1';
import globalVar from './globalVar';

import './Main.css';

import searchIcon from '../images/search.png';

const myWindowWidth = window.innerWidth; //화면 크기 저장
const myWindowHeight = window.innerHeight;

class TestComponent extends React.Component {
    constructor() {
        super();
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);   
        this.state = {
            title : "percentage-calculator"
        };
    }

    openNav(event) {
        document.getElementById("mySidenav").style.width = "77%";
    }
    closeNav(event) {
        document.getElementById("mySidenav").style.width = "0px";
    }

    render() {
        const {title} = this.state;
        return (
            <div id="mainHeaderin">
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
                    <Link to="/" id="percentage-calculator" onClick={()=>{
                        this.setState({
                            title : "percentage-calculator"
                        });
                        document.getElementById("mySidenav").style.width = "0px";

                    }}>percentage-calculator</Link>
                    <Link to="/Page1" id="link2" onClick={()=>{
                        this.setState({
                            title : "compound interest calculator"
                        });
                        document.getElementById("mySidenav").style.width = "0px";
                    }}>compound interest calculator</Link>

                    
                </div>
                <div >
                    <button id='bgcolorNotBlack' onClick={this.openNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                        </svg>
                    </button>

                </div>
                <div id='divTitle'>
                    {this.state.title}    
                </div>
            </div>
        );
    }
}

function Main() {
    function clickBody() {
        document.getElementById("mySidenav").style.width = "0px";
    }
    // useEffect(() => {
    //     window.addEventListener("beforeunload", alertUser);
    //     return () => {
    //       window.removeEventListener("beforeunload", alertUser);
    //     };
    //   }, []);
    //   const alertUser = (e) => {
    //     e.preventDefault();
    //     e.returnValue = "";
    //   };
    return (
        <div>
            <div id='mainHeader'>
                <TestComponent a="1"></TestComponent>
            </div>

            <div id="mainBody" onClick={clickBody}>
                <Routes>
                    <Route path="/" element={<Page0 />} />
                    <Route path="/Page1" element={<Page1 />} />
                </Routes>

                <div id='divBottom' style={{ width: globalVar.adWindowWidth, height: globalVar.adWindowHeight }}>
                    123
                </div>
            </div>
        </div>
    );
}

export default Main;

