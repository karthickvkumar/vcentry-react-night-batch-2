import React, { Component } from 'react';

import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import SideBarComponent from './components/sidebar';
import ContentComponent from './components/content';

class AppComponent extends Component{
  
  render(){
    return(
      <div>
        <HeaderComponent></HeaderComponent>
        <SideBarComponent></SideBarComponent>
        <ContentComponent></ContentComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default AppComponent;
