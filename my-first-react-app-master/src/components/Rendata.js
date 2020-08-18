import React from 'react'

class Rendata extends React.Component{
    
    render(){
        const {id ,name ,sname} =this.props.item;
        return (
        <div style ={styl}>
        <h1>{name}  {sname}      
        <button onClick = {this.props.deleteItem.bind(this,id)} style={btnstyle}>X</button> </h1>
        </div>
        );
    }

}
const styl ={
    alignItems : 'center',
    background : '#f4f4f4',
    padding :'10px',
    borderBottom: '1px #ccc dotted',
    borderRadius :5
    
}

const btnstyle = {
    borderRadius : 25,
    float: 'right',
    height:50,
    width:50,
    size:25,
}
export default Rendata