import React from 'react';
import {useEffect, useState} from 'react';
import './FunctionComponent.css';

function ClockFunction(){
    const [time, setTime] = useState(new Date())

    function tick(){
        setTime(new Date())
    }

    useEffect(
        () =>{
        let Timer;
        Timer = setInterval(() => tick(),1000)
        return () =>{
            clearInterval(Timer)
        }
        }
    )
    
    return(
        <div className="Clock VerFunction">
            <h2>build Using Function Component</h2>
            <h1>Realtime Clock</h1>
            <h1 className="time">{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default ClockFunction