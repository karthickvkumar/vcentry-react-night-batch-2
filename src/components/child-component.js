import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h1>This is a Child Component</h1>
        <h1>The user name is : {this.props.name}</h1>
        <h1>The user name is : {this.props.username}</h1>
      </div>
    );
  }
}

export default ChildComponent;