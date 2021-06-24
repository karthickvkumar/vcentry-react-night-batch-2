import React, {Component} from 'react';

class ContentComponent extends Component{

  onHandleInput = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
       <div className="width-50-per">
         <h1>This is a Content Component</h1>
         <div>
           <input type="text" placeholder="Enter email id.." onChange={this.onHandleInput}/>
         </div>
       </div>
    );
  }
}

export default ContentComponent;