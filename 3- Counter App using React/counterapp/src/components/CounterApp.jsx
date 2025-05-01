import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <div className="counter-box">
                <h1>React Counter</h1>
                <div className="counter-display">{count}</div>
                <div className="buttons">
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                    <button onClick={() => setCount(0)} className="reset-btn">Reset</button>
                </div>
            </div>
        </div>
    );
};

export default CounterApp;
