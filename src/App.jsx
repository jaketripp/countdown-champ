import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: `December 25, ${new Date().getFullYear()}`,
            newDeadline: ''
        };
    }

    changeDeadline() {
        this.setState({ deadline: this.state.newDeadline });
    }

    onSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div className="App container">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}
                />
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <input
                        className="form-control"
                        placeholder="new date"
                        onChange={e => this.setState({ newDeadline: e.target.value })}
                        autoFocus
                    />
                    <button
                        className="btn btn-primary"
                        onClick={() => this.changeDeadline()}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
};

export default App;
