import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import InboxPage from './inbox-page';
import SendPage from './send-page';
import TrashPage from './trash-page';

class MailBoxPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <div className="header"></div>
          <div className="body">
            <div className="sidebar">
                <NavLink to="/mail/inbox" className="nav-btn" activeClassName="active-btn">Inbox</NavLink>
                <NavLink to="/mail/sent" className="nav-btn" activeClassName="active-btn">Sent</NavLink>
                <NavLink to="/mail/trash" className="nav-btn" activeClassName="active-btn">Trash</NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route path="/mail/inbox" component={InboxPage}></Route>
                <Route path="/mail/sent" component={SendPage}></Route>
                <Route path="/mail/trash" component={TrashPage}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default MailBoxPage;