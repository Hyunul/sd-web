import '../App.css';
import React from 'react';
import * as front from './front';

const Main = () => {
    return (
        <div className="App">
            <div className="App-container">
                <h2> Input Text List </h2>
                <div id="view"></div>
                <div id="view2"></div>
                <br />
                <div className="App-container2">
                    <input className="App-input" id="prompt" placeholder="Enter your prompt" />
                    <button className="add-button" onClick={front.add_Tag}>
                        ENTER
                    </button>
                </div>
                <div className="App-container3">
                    <button className="generate-button">GENERATE</button>
                </div>
            </div>
        </div>
    );
};

export default Main;
