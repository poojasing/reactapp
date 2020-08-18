import React from 'react'
import Rendata from './Rendata'

class Midata extends React.Component{
    render(){
        return this.props.prop.map((item) =>(
          <Rendata key={item.id} item={item} deleteItem = {this.props.deleteItem}/>
        ));
    }
}
export default Midata