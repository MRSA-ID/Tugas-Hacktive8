import React from 'react';
import './ClassComponent.css';

export default class Clock extends React.Component{
    constructor(){
        super()
        this.state = {
            timer: new Date()
        }
    }

    tick(){
        this.setState({
            timer: new Date()
        })
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }



    render() {
        return(
            <div className='Clock'>
                <h2>Build Using Class Component</h2>
                <h1>Realtime Clock</h1>
                <h1 className='time'>{this.state.timer.toLocaleTimeString()}</h1>
            </div>
        );
    }
}