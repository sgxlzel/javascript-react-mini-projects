import React, {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <div className='container'>
            <div>
                <p className="count-display">Counter: {count}</p>
            </div>
            <span>
                <button className="counter-btn" onClick={decrement}>-</button>
                <button className="counter-btn" onClick={reset}>Reset</button>
                <button className="counter-btn" onClick={increment}>+</button>
            </span>
           
            
        </div>
    )
}
export default Counter;