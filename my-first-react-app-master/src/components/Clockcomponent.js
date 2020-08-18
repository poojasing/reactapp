import React ,{Component } from 'react';
class Clockcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = { date:new Date() }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() { 
        return ( 
        <p style={styl}>{this.state.date.toLocaleTimeString()}</p>
       );
    }
}
const styl = {
    position: "absolute",
    bottom: 7, 
    right: 0
}
 
export default Clockcomponent;