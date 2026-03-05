import React, {useState, useEffect, useRef, use} from 'react';

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);  
        startTimeRef.current = Date.now() - elapsedTime;
        
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(time){
        
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor((elapsedTime % 1000)/10);

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        milliseconds = milliseconds.toString().padStart(2, '0');

        return `${minutes}:${seconds}:${milliseconds}`;
        

    }

    return(
        <div className='stopwatch'> 
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button onClick={start} className='start-btn'>Start</button>
                <button onClick={stop} className='stop-btn'>Stop</button>
                <button onClick={reset} className='reset-btn'>Reset</button>
            </div>
        </div>
    )
    
}
export default StopWatch;