import React, { Component } from 'react';
import ChildComponent from '../components/child-component';

class ParentPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : 'Karthick',
    }
  }

  render() {
    return (
      <div>
        <h1>This is a Parent Componenet</h1>
        <ChildComponent name={this.state.username} {...this.state}></ChildComponent>
      </div>
    );
  }
}

export default ParentPage;