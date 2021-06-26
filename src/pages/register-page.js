import React, { Component } from 'react';

class RegisterPage extends Component{

  render() {
    return (
       <div>
         <h1>Welcome to Registration Page!</h1>
         <div className="register-form">
           <div className="m-bottom-15">
             <label className="label">Enter Your First Name :</label>
             <input type="text" className="input" placeholder="Please enter first name.."/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Enter Your Last Name :</label>
             <input type="text" className="input" placeholder="Please enter last name.."/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Enter Your Email ID :</label>
             <input type="text" className="input" placeholder="Please enter email id.."/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Enter Your Password :</label>
             <input type="text" className="input" placeholder="Please enter password.."/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Select your D.O.B :</label>
             <input type="date" className="input"/>
           </div>
           <div className="m-bottom-15">
             <label className="label">Select your Gender :</label>
             <input type="radio" name="gender"/>Male
             <input type="radio" name="gender"/>Female
             <input type="radio" name="gender"/>Others
           </div>
           <div className="m-bottom-15">
             <label className="label">Select your Hobbies :</label>
              <input type="checkbox" />Cricket
              <input type="checkbox" />Chess
              <input type="checkbox" />Foot Ball
              <input type="checkbox" />Hockey
              <input type="checkbox" />Carom
            </div>
           <div className="m-bottom-15">
             <label className="label">Enter your Address :</label>
             <textarea className="text-box" placeholder="Please enter your address.."></textarea>
            </div>
            <div className="m-bottom-15">
             <label className="label">Select your City :</label>
             <select className="input" defaultValue="">
               <option value="" disabled>Please select any City</option>
               <option>Chennai</option>
               <option>Mumbai</option>
               <option>Delhi</option>
               <option>Pune</option>
               <option>Cochin</option>
             </select>
           </div>
           <div>
             <button>Create My Account</button>
           </div>
         </div>
       </div>
    );
  }
}

export default RegisterPage;