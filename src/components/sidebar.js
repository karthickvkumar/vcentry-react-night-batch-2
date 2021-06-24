import React, {Component} from 'react';

class SideBarComponent extends Component{

  homePage(){
    alert("HOME PAGE")
  }
  
  inboxPage(){
    alert("INBOX PAGE") 
  }
  
  aboutPage(){
    alert("ABOUT PAGE")
  }

  render() {
    return (
       <div className="width-50-per">
         <h1>This is a Side Bar Component</h1>
         <div>
          <button className="btn" onClick={() => { this.homePage() }}>Home Page</button>
          <button className="btn" onClick={() => { this.inboxPage() }}>Inbox Page</button>
          <button className="btn" onClick={() => { this.aboutPage() }}>About Page</button>
        </div>
       </div>
    );
  }
}

export default SideBarComponent;
