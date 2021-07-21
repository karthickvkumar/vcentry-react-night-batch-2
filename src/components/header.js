import React, {Component} from 'react';

class HeaderComponent extends Component{

  render(){
    const styles = {
      bgColor : {
        color : 'yellow',
        backgroundColor : 'black'
      },
      height: {
        height : '100px'
      }
    }


    return(
      <div className="border" style={styles.height}>
        <h1 style={styles.bgColor}>This is a Header Component</h1>
      </div>
    )
  }
}

export default HeaderComponent;