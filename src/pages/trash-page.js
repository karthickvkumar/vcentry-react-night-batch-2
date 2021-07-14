import React, { Component } from 'react';
import axios from 'axios';

class TrashPage extends Component {

  onDeleteUser(){
    const url = "https://reqres.in/api/users/2";
    axios.delete(url)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
  }

  render() {
    return (
      <div>
        <h1>This is a TRASH PAGE</h1>
        <button onClick={() => this.onDeleteUser()}>Delete User</button>
      </div>
    );
  }
}

export default TrashPage;