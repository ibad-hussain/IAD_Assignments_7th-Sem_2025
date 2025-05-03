import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="app">
            <div className="counter-box">
                <h1>Redux Counter</h1>
                <div className="counter-display">{count}</div>
                <div className="buttons">
                    <button onClick={() => dispatch(increment())}>Increment</button>
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
                    <button onClick={() => dispatch(reset())}> Reset </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
