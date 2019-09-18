import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppHeader} from "./component/header";
import {TypographyMenu} from "./component/leftbar";
import {Dashboard} from "./component/dashboard";
import TopBlock from "./component/TopBlock";


export default class App extends  Component{
    render() {
        return(
            <div>
                <AppHeader/>
                <body> <TypographyMenu />
                <Dashboard />
                <TopBlock/>
                </body>
            </div>
        )
    }
}
