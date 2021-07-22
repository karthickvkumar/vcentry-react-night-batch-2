import React, { Component } from 'react';

import DataSharingContext from '../context/data-sharing-context';


class ProductList extends Component {
  render() {
    return (
      <DataSharingContext.Consumer>
        {
          (context) => {
            console.log(context)
            return (
              <div>
                <h1>This is a Product List Component</h1>
                <h1>The search result is {context.searchResult}</h1>
              </div>
            );
          }
        }
      </DataSharingContext.Consumer>
      
    );
  }
}

ProductList.contextType = DataSharingContext;
export default ProductList;