import React, {Component} from 'react';

class Decrement extends Component{
    render(){

        return(
            <button onClick={this.props.onChange}>
            {this.props.label}
            </button>
        );

    }  
    
}
export default Decrement;