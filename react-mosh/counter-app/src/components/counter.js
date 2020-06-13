import React, { Component } from 'react'
class Counter extends Component {
    // state = {
    //     value:this.props.counter.value
    // }
    render() {   
        return ( 
            <div className="row">
            <div className="col-1"><span className={this.onFormatCount()}>{this.onNumOrZero()} </span></div>
            <div className="col">
            <button className="btn btn-secondary btn-sm m-2" onClick={() => {this.props.onIncrement(this.props.counter)}}>+</button>
            <button className="btn btn-secondary btn-sm m-2" disabled ={this.props.counter.value ===0?'disabled':""} onClick={()=>{this.props.onDecrement(this.props.counter)}}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>{this.props.onDelete(this.props.counter.id)}}>Delete</button>
            </div>
            </div>
            
            );

    }
    // onIncreaseHandler = () => {
    //     this.setState({value:this.state.value+1})
        
    // }
    
    onFormatCount() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value ==0 ? "warning" : "primary";
        return classes
    }
    onNumOrZero() {
        return this.props.counter.value === 0 ? 'zero' : this.props.counter.value
    }
}
export default Counter;