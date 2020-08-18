import React from 'react';
import Clockcomponent from './Clockcomponent'

class Footer extends React.Component{
  render(){
    return (
      <div style={fs}>
    <p style={{fontSize : 25}} >Made by {this.props.prop}</p>
    <Clockcomponent />
    </div>
    );
 }
}
const fs = {
        display: 'flex',
        justifyContent:'center',
        border: '2px',
        backgroundColor : 'lightgrey',
        overflow: 'hidden',
        height : 70
    }
export default Footer