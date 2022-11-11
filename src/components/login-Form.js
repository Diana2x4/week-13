import React from "react";
import LoginButton from "./login-Button";

let e = React.createElement;

export default class Login extends React.Component{
    render(){
        return (
        <div className="card w-100">
            <div className="card-header bg-success text-white border border-dark border-4">
            <h3>Log in!</h3>
            </div>
            <div className="card-body">
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password"/>
            </div>
            <div className="card-footer">
                <LoginButton />
            </div>

        </div>
        );
}
}