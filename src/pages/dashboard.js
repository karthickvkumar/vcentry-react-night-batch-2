import React, { Component } from 'react';

import HeaderComponent from '../components/header';
import SideBarComponent from '../components/sidebar';
import ContentComponent from '../components/content';

import DataSharingContext from '../context/data-sharing-context';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : ''
    }
  }

  onReceiveSearch = (value) => {
    this.setState({
      data : value
    })
  }

  render() {
    return (
      <DataSharingContext.Provider value={{
        message : 'Hello from Dashboard page',
        readFromSeach : this.onReceiveSearch,
        searchResult : this.state.data
      }}>
        <div className="main">
            <HeaderComponent></HeaderComponent>
            <div className="body">
              <SideBarComponent></SideBarComponent>
              <ContentComponent></ContentComponent>
            </div>
          </div>
      </DataSharingContext.Provider>
    );
  }
}

export default Dashboard;