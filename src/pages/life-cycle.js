import React, { Component } from 'react';

class LifeCycle extends Component {

  constructor(props){
    super(props);
    console.log("CONSTRUCTOR Method");
    this.state = {
      name : 'Mr.MK'
    };
  }

  componentWillMount(){
    console.log("COMPONENT WILL MOUNT Method");
  }

  componentDidMount(){
    console.log("COMPONENT DID MOUNT Method");
  }

  onClickBtn(){
    this.setState({
      name : 'Mr.KKKMMM'
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(this.state.name , nextState);
    console.log("SHOULD COMPONENT UPDATE Method");
    if(this.state.name == nextState.name){
      return false;
    }else{
      return true;
    }
  }

  componentWillUpdate(){
    console.log("COMPONENT WILL UPDATE Method");
  }

  componentDidUpdate(){
    console.log("COMPONENT DID UPDATE Method")
  }

  componentWillUnmount(){
    console.log("COMPONENT WILL UNMOUNT Method")
  }

  render() {
    console.log("RENDER Method")
    return (
      <div>
        <h1>This is a Life Cycle Component</h1>
        <h1>The UserName  is : {this.state.name}</h1>
        <button onClick={() => this.onClickBtn()}>Update Username</button>
      </div>
    );
  }
}

export default LifeCycle;