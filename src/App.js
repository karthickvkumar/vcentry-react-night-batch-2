import React, { Component } from 'react';

import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import SideBarComponent from './components/sidebar';
import ContentComponent from './components/content';

import './styles/main.css';

class AppComponent extends Component{
  
  render(){
    return(
      <div>
        <HeaderComponent></HeaderComponent>
        <div className="wrapper">
          <SideBarComponent></SideBarComponent>
          <ContentComponent></ContentComponent>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default AppComponent;
