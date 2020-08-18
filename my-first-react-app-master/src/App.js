import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Midata from './components/Midata';
import Additem from './components/Additem';
import About from './components/about/About';
const uuid = require('uuid');

class App extends React.Component{
  constructor(){
    super();
    this.state={
      hName : 'Myapp',
      fName : 'Manish',
      items :[
        {
          id : uuid.v4() ,
          name :'manish',
          sname :'kumar'
        }
      ]
    }
  }

  deleteItem=(id) =>{
    this.setState({
        items: [...this.state.items.filter(item =>item.id !== id)]
    });
  }

  addItem = (title,sname) =>{
    const newItem = {
      id :uuid.v4(),
      name : title,
      sname: sname
    }
    if(title)
    this.setState({ items :[ ...this.state.items, newItem ]});
  }


  render(){
    return (
      <Router>
        <div>
            <Header name={this.state.hName} />
              <Route exact path="/" render={props=>(
                <React.Fragment>
                  <Additem addItem={this.addItem} />
                <div style={{marginLeft: "auto",marginRight: "auto",width:'95%'}}>
                    <Midata prop ={this.state.items} deleteItem = {this.deleteItem}/>
                </div>
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
                <div style ={styl}>
                    <Footer prop={this.state.fName}/>
                </div>
        </div>
      </Router>
    );
 }
}


const styl ={
    position:'absolute',
    left:0,
    bottom:0,
    right:0,
}


export default App;
