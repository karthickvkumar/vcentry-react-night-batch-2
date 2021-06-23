import React, {Component} from 'react';

class FooterComponent extends Component{

  render() {
    return (
       <div className="border">
         <h1 style={{
           color : 'white',
           backgroundColor : 'red'
         }}>This is a Footer Component</h1>
       </div>
    );
  }
}

export default FooterComponent;