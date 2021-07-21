import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import InboxPage from './inbox-page';
import SendPage from './send-page';
import TrashPage from './trash-page';
import LifeCycle from './life-cycle';
import ParentPage from './parent-page';

class MailBoxPage extends Component {
  render() {
    
    console.log(this.props.location.state)
    const data = this.props.location.state;
    return (
      <BrowserRouter>
        <div className="main">
          <div className="header">
            {data.email}
          </div>
          <div className="body">
            <div className="sidebar">
                <NavLink to="/mail/inbox" className="nav-btn" activeClassName="active-btn">Inbox</NavLink>
                <NavLink to="/mail/sent" className="nav-btn" activeClassName="active-btn">Sent</NavLink>
                <NavLink to="/mail/trash" className="nav-btn" activeClassName="active-btn">Trash</NavLink>
                <NavLink to="/mail/cycle" className="nav-btn" activeClassName="active-btn">Life Cycle</NavLink>
                <NavLink to="/mail/parent" className="nav-btn" activeClassName="active-btn">Parent</NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route path="/mail/inbox" component={InboxPage}></Route>
                <Route path="/mail/sent" component={SendPage}></Route>
                <Route path="/mail/trash" component={TrashPage}></Route>
                <Route path="/mail/cycle" component={LifeCycle}></Route>
                <Route path="/mail/parent" component={ParentPage}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default MailBoxPage;