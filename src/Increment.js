import React, {Component} from 'react';

class Increment extends Component{
    render(){

        return(
            <button onClick={this.props.onChange}>
            {this.props.label}</button>
        );

    }  
    
}
export default Increment;