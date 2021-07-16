import React, { Component } from 'react';
import axios from 'axios';

class InboxPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      userList : []
    }
  }

  componentDidMount(){
    this.listUser();
  }

  listUser(){
    const url = "https://reqres.in/api/users?page=2";
    axios.get(url)
    .then((response) => {
      console.log(response.data.data)
      this.setState({
            userList : response.data.data
          })
        })
        .catch((error) => {
          console.log(error)
        });
  }

  render() {
    const users = this.state.userList.map((value, index) => {
      return(
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
          <td>
            <img src={value.avatar} />
          </td>
        </tr>
      )
    });

    console.log(users)
    return (
      <div>
        <h1>This is a INBOX PAGE</h1>
        <button onClick={() => this.listUser()}>List User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Profile Picture</th>
            </tr>
          </thead>
          <tbody>

            {users}

          </tbody>
        </table>
      </div>
    );
  }
}

export default InboxPage;