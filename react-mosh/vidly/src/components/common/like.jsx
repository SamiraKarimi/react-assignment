import React, { Component } from 'react'
const Like = (props) => {
    let classes = "fa fa-heart"
    if (!props.liked) 
    classes += "-o"
    return ( <div>
        <i className={classes} style ={{cursor: "pointer"}} aria-hidden="true" onClick = {props.onMovieClick}></i>
    </div> );
} 
export default Like;