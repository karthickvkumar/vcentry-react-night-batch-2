import React, {Component} from 'react';

class ContentComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      username : ''
    }
  }

  onHandleInput = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  render() {
    return (
       <div className="width-50-per">
         <h1>This is a Content Component</h1>
         <div>
           <input type="text" placeholder="Enter email id.." onChange={this.onHandleInput}/>
           <h1>{this.state.username}</h1>
         </div>
       </div>
    );
  }
}

export default ContentComponent;