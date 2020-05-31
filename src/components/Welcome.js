import React from 'react'

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    render(){
        return (
            <div>
                <h2>Class {this.props.name}</h2>
                <h3>It Is {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        )  
    }
}
export default Welcome