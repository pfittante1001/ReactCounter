import React, { Component } from 'react';
import Displayer from './Displayer';
import Increment from './Increment';
import Decrement from './Decrement';
class App extends Component {
  constructor(){
    super();
    this.state = {
      number: 0
    };
  }
  increment = () => {
    const old = this.state.number;
    this.setState({number: old  + 1});
   };

  decrement = () => {
    const old = this.state.number;

    if (old == 0){
      return;
    }
    this.setState({number: old  - 1});
  };
  render() {
    
    return (
      <div>
        <Displayer number ={this.state.number}/>
        <div>
        <Increment onChange={this.increment} label='++'/>
        <Decrement onChange={this.decrement} label='--'/>
       </div>
      </div>
    );
  }
}

export default App;
