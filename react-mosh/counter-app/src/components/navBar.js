import React, { Component } from 'react';
class NavBar extends Component {
    state = {  }
    render() { 
        return (  <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Total:<span className="badge badge-secondary m-2">{this.props.total}</span></span>
        </nav> );
    }
}
 
export default NavBar;