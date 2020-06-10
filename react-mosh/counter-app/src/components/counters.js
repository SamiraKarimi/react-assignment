import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
   
    render() { 
        return ( 
            <div>
            <h3>Hi From the counter</h3>
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
            {this.props.counters.map(counter => <Counter  
               counter={counter} onDelete= {this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}/>)}
            </div>
        );
    } 
}
export default Counters;   