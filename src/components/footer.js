import React, {Component} from 'react';

class FooterComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onLogin(){
    console.log(this.state)
  }

  render() {
    return (
       <div className="login-form">
         <div>
           <label className="label">Enter Email ID: </label>
           <input type="text" name="email" placeholder="Please enter email id..." onChange={this.onHandleInput}/>
         </div>
         <div className="m-top-15">
           <label className="label">Enter Password: </label>
           <input type="password" name="password" placeholder="Please enter password..." onChange={this.onHandleInput}/>
         </div>
         <div className="m-top-15">
           <button className="btn" onClick={() => {this.onLogin()}}>Login</button>
         </div>
       </div>
    );
  }
}

export default FooterComponent;