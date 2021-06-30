import React, { Component } from 'react';

class RegisterPage extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      firstName : '',
      lastName : '',
      email: '',
      password : '',
      dateOfBirth : '',
      gender : '',
      hobbies : [],
      address : '',
      city : ''
    };
  }

  onHandleInput = (event) => {
    if(event.target.type === "checkbox"){
      if(event.target.checked){
        this.state.hobbies.push(event.target.value);
      }
      else{
        const index = this.state.hobbies.findIndex((value, index) => {
          return value === event.target.value;
        });
        this.state.hobbies.splice(index, 1);
      }

      this.setState({
        hobbies : this.state.hobbies
      })
    }
    else{
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }

  onCreateAccount(){
    console.log(this.state)
  }

  render() {
    return (
       <div>
         <h1>Welcome to Registration Page!</h1>
         <div className="register-form">
           <div className="m-bottom-15">
             <label className="label">Enter Your First Name :</label>
             <input type="text" className="input" name="firstName" placeholder="Please enter first name.." onChange={this.onHandleInput} autoComplete="off"/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Enter Your Last Name :</label>
             <input type="text" className="input" name="lastName" placeholder="Please enter last name.." onChange={this.onHandleInput}/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Enter Your Email ID :</label>
             <input type="text" className="input" name="email" placeholder="Please enter email id.." onChange={this.onHandleInput}/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Enter Your Password :</label>
             <input type="password" className="input" name="password" placeholder="Please enter password.." onChange={this.onHandleInput}/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Select your D.O.B :</label>
             <input type="date" name="dateOfBirth" className="input" onChange={this.onHandleInput}/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Select your Gender :</label>
             <input type="radio" name="gender" value="male" onChange={this.onHandleInput}/>Male
             <input type="radio" name="gender" value="female" onChange={this.onHandleInput}/>Female
             <input type="radio" name="gender" value="do not want to specify" onChange={this.onHandleInput}/>Others
           </div>
           <div className="m-bottom-15">
             <label className="label">Select your Hobbies :</label>
              <input type="checkbox" value="cricket" name="hobbies" onChange={this.onHandleInput}/>Cricket
              <input type="checkbox" value="chess" name="hobbies" onChange={this.onHandleInput}/>Chess
              <input type="checkbox" value="foot ball" name="hobbies" onChange={this.onHandleInput}/>Foot Ball
              <input type="checkbox" value="hockey" name="hobbies" onChange={this.onHandleInput}/>Hockey
              <input type="checkbox" value="carom" name="hobbies" onChange={this.onHandleInput}/>Carom
            </div>
           <div className="m-bottom-15">
             <label className="label">Enter your Address :</label>
             <textarea className="text-box" name="address" placeholder="Please enter your address.." onChange={this.onHandleInput}></textarea>
            </div>
            <div className="m-bottom-15">
             <label className="label">Select your City :</label>
             <select className="input" defaultValue="" name="city" onChange={this.onHandleInput}>
               <option value="" disabled>Please select any City</option>
               <option value="Chennai - CH">Chennai</option>
               <option value="Mumbai - BOM">Mumbai</option>
               <option value="Delhi - DEl">Delhi</option>
               <option value="Pune - Pu">Pune</option>
               <option value="Cochin - KO">Cochin</option>
             </select>
           </div>
           <div>
             <button onClick={() => { this.onCreateAccount() }}>Create My Account</button>
           </div>
         </div>
       </div>
    );
  }
}

export default RegisterPage;