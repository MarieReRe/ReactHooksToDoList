import React from 'react';
import { render } from 'node-sass';

//make this a function compoment
export default function Login() {

    //static contextType = AuthContext;
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = e.target.elements;
        Login();
    }
 
        return (
            <div className="Login">
                <form onSubmit={handleSubmit}>
                    <input placeholder="Username" />
                    <input placeholder="Password" type= "password" name="password" />
                </form>
            </div>
        )
}


