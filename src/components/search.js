import React, { Component } from 'react';

import DataSharingContext from '../context/data-sharing-context';

class SearchComponent extends Component {

  onHandleInput = (event) => {
    this.context.readFromSeach(event.target.value)
  }


  render() {
    return (
      <DataSharingContext.Consumer>
        {
          (context) => {
            return(
              <div>
                <input type="text" className="search-box" placeholder="Enter a text value" 
                onChange={this.onHandleInput}/>
              </div>      
            )
          }
        }
      </DataSharingContext.Consumer>
      
    );
  }
}

SearchComponent.contextType = DataSharingContext;

export default SearchComponent;