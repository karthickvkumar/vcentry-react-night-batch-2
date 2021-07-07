import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';

import './styles/main.css';

class AppComponent extends Component{
  
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/home" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
