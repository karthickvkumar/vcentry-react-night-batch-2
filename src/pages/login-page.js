import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class LoginPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      login : {
        email : '',
        password : ''
      },
      error : {
        email : false,
        password : false
      }
    }
  }

  onHandleInput = (event) => {
    //console.log(event.target.value, event.target.name);
    this.setState({
      login : {...this.state.login, [event.target.name] : event.target.value}
    })
  }

  onLogin(){
    for(let key in this.state.login){
      if(key == 'email'){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.state.error.email = !re.test(String(this.state.login[key]).toLowerCase());
      }
      else if(key == "password"){
        this.state.error.password = this.state.login[key].length >= 6 ? false : true;
      }
    }

    this.setState({
      error : this.state.error
    });

    for(let key in this.state.error){
      if(this.state.error[key]){
        return;
      }
    }

    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <h1>Welcome to LOGIN PAGE</h1>
        <div>
          <div>
            <label>Enter your Email Id:</label>
            <input type="text" name="email" placeholder="please enter your email id" onChange={this.onHandleInput}/>
            { this.state.error.email && <span className="error-msg">Please enter a VALID email</span>}
          </div>
          <div>
            <label>Enter your Password:</label>
            <input type="password" name="password" placeholder="please enter your password" onChange={this.onHandleInput}/>
            { this.state.error.password && <span className="error-msg">Please enter a VALID password</span>}
          </div>
          <div>
            <button onClick={() => this.onLogin()}>Login</button>
            <NavLink to="/mail">Go to Mail Box Page</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;