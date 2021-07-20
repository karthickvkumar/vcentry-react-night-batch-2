import React, { Component } from 'react';
import ChildComponent from '../components/child-component';

class ParentPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : 'Karthick',
      message : ''
    }
  }

  onReceiveValue = (value) => {
    console.log(value)
    this.setState({
      message : value
    })
  } 

  render() {
    return (
      <div>
        <h1>The typed  value is {this.state.message}</h1>
        <h1>This is a Parent Componenet</h1>
        <ChildComponent name={this.state.username} {...this.state} 
          onLoadData={this.onReceiveValue}></ChildComponent>
      </div>
    );
  }
}

export default ParentPage;