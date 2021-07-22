import React, {Component} from 'react';
import SearchComponent from './search';

class HeaderComponent extends Component{

  render(){
    return(
      <div className="header">
        <div>
          <h1>Header Page</h1>
        </div>
        <SearchComponent></SearchComponent>
      </div>
    )
  }
}

export default HeaderComponent;