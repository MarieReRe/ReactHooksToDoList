import React from 'react';


//make this a function compoment
export default function Login() {

    //static contextType = AuthContext;
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = e.target.elements;
        Login();
    }
 
    return (
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Username" name="username" />
          <input placeholder="Password" type="password" name="password" />
          <button>Log In</button>
        </form>
      )
}


