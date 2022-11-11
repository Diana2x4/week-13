import React from "react";
import Header from "./header";
import Login from "./login-Form";

let e = React.createElement;

export default class MainMenu extends React.Component{
    render(){
        return (
            <div className="container">
                <Header />
                <Login />
            </div>
        );
    }
}