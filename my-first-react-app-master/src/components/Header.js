import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
  render(){
    return (
    <header style ={hs}>
    <h1> {this.props.name}</h1>
    <Link style={linkstyle} to="/">Add</Link> | <Link style={linkstyle} to="/about">About</Link>
    </header>
    );
 }
}
const hs = {
        textAlign:'center',
        padding:'5px',
        border: '2px solid black',
        background : 'lightgrey',
        color:'black', 
        borderRadius: '10px',
}

const linkstyle ={
  color:"red",
  textDecoration :'none',
  fontSize :"20px"
}

export default Header;
