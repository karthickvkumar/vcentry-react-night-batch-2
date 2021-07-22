import React, {Component} from 'react';
import ProductList from './product-list';

class ContentComponent extends Component{

  render() {
    return (
      <div className="content">
          <h1>Content Page</h1>   
          <ProductList></ProductList> 
      </div>
    );
  }
}

export default ContentComponent;