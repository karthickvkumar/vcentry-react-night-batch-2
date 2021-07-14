import React, { Component } from 'react';

class SendPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      createUser : {
        name : '',
        job : ''
      } 
    }
  }

  onHandleInput = (event) => {
    this.setState({
      createUser : {...this.state.createUser, [event.target.name] : event.target.value}
    })
  }

  onCreateUser(){
    console.log(this.state.createUser);
  }

  render() {
    return (
      <div>
        <h1>This is a SENT PAGE</h1>
        <div>
          <label>Enter User Name :</label>
          <input type="text" name="name" placeholder="Please enter user name.." onChange={this.onHandleInput}/>
        </div>
        <div>
          <label>Enter Job :</label>
          <input type="text" name="job" placeholder="Please enter job.." onChange={this.onHandleInput}/>
        </div>
        <div>
          <button onClick={() => this.onCreateUser()}>Create User</button>
        </div>
      </div>
    );
  }
}

export default SendPage;