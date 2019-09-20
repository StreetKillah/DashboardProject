import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppHeader} from "./component/header";
import {TypographyMenu} from "./component/leftbar";
import {Dashboard} from "./component/dashboard";
import TopBlock from "./component/TopBlock";
import SecondBlock from "./component/secondblock";
import ThirdBlock from "./component/thirdblock";
import FourthBlock from "./component/fourthblock";
import FifthBlock from "./component/fifthblock";
import SixthBlock from "./component/sixthblock";


export default class App extends  Component{
    render() {
        return(
            <div>
                <AppHeader/>
                <body> <TypographyMenu />
                <Dashboard />
                <TopBlock/>
                <SecondBlock/>
                <ThirdBlock/>
                <FourthBlock/>
                <FifthBlock/>
                <SixthBlock/>
                </body>
            </div>
        )
    }
}
