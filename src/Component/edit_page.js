import '../App.css';
import React from 'react';
import * as front from './front';

const Main = () => {
    return (
        <div className="App">
            <div className="App-container">
                <div className="App-container2">
                    <input className="App-input" id="prompt" placeholder="Enter your prompt" />
                </div>
            </div>
        </div>
    );
};

export default Main;
