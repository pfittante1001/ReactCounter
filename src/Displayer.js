import React, {Component} from 'react';

class Dispayer extends Component{
    
    render(){
        const {number} = this.props;
        return (
            <div>
            {number}
          </div>
        );
    }
}
export default Dispayer;