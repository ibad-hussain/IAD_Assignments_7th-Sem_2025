import React, { Component } from 'react';
import './CounterApp.css';

class CounterApp extends Component {
    state = { count: 0 };

    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });
    reset = () => this.setState({ count: 0 });

    render() {
        return (
            <div className="app">
                <div className="counter-box">
                    <h1>React Counter</h1>
                    <div className="counter-display">{this.state.count}</div>
                    <div className="buttons">
                        <button onClick={this.increment}>Increment</button>
                        <button onClick={this.decrement}>Decrement</button>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterApp;
