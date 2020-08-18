import React, { Component } from 'react'

export class Additem extends Component {
    state = {
        title :'',
        sname :''
    } 
    onChange = (e) => {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        );
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state.title,this.state.sname);
        this.setState(
            {
                title:'',
                sname:''
            }
        );
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{display : 'flex' }}>
             <input 
                type="text" 
                name="title" 
                placeholder="enter item...." 
                value ={this.state.title} 
                style ={inpstyl}
                onChange = {this.onChange}
            />
            <input 
                type="text" 
                name="sname" 
                placeholder="enter sname...." 
                value ={this.state.sname} 
                style ={inpstyl}
                onChange = {this.onChange}
            />
             <input type="submit" value="submit" style={btnstyl} />
            </form>
        )
    }
}
const btnstyl = {
    background:"#555",
    color : "white",
    flex:'1',
    padding:"7px 20px",
    fontSize :'20px',
    borderRadius:'5px'
}
const inpstyl = {
    flex:'9',
    padding:'10px',
    borderRadius:'5px'
}

export default Additem
