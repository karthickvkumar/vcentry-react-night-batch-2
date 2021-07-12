import React, { Component } from 'react';
import axios from 'axios';

class InboxPage extends Component {

  listUser(){
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        });
  }

  render() {
    return (
      <div>
        <h1>This is a INBOX PAGE</h1>
        <button onClick={() => this.listUser()}>List User</button>
      </div>
    );
  }
}

export default InboxPage;