import React, { Component } from 'react'
import Counters from './components/counters';
import NavBar from './components/navBar'
class App extends Component {
    state = { 
        counters :[
            {id:1,value:0},
            {id:2,value:15},
            {id:3,value:0},
            {id:4,value:0},
            {id:5,value:0},
            {id:6,value:0}
        ]
     }
    render() { 
        return ( <React.Fragment>
                <NavBar total = {this.state.counters.filter(c => c.value>0).length}/>
                 <div className="container"><Counters 
                 counters = {this.state.counters}
                  onDelete={this.deleteHandler}
                  onIncrement={this.incrementHandler}
                  onDecrement={this.decrementHandler}
                  onDelete = {this.deleteHandler}
                  onReset = {this.resetHandler}
                  /></div>
            </React.Fragment>
            
            );
    }
    incrementHandler = (counter) => {
        console.log('increment clicked',counter.id,counter);
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter};
       counters[index].value++;
       this.setState({counters})
        
    }
    decrementHandler = (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        // if (counters[index].value>=0){
        //     this.setState({counters});
        // } else return null;
       return (counters[index].value>=0 ?this.setState({counters}): null );  
    }
    
    deleteHandler = (id) => {
        console.log('Delete clicked and raised',id);
        let counters=this.state.counters.filter(counter =>counter.id !== id
        )
        this.setState({counters})
    };
    resetHandler = () =>{
        console.log('Reset Clicked!');
        let counters = this.state.counters.map(counter => {counter.value =0;
        return counter;
        });
        console.log(counters);
        this.setState({counters})
    }
}
 
export default App;
