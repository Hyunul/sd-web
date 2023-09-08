import '../App.css';
import React from 'react';
import * as front from './front';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    
    const getData = async () => {

        let value = document.getElementsByClassName('arr_div')[0].textContent;
        let arr = value.split(",")
        let img = [];

        for (let i = 0; i < arr.length; i++) {

            let response = await axios.post('http://221.159.102.58:8000/api/txt/', {
            txt: arr[i]

        })
        .then(function (response) {
            console.log(response)

            img.push(response.data);

        }).catch(function (error) {
            
        }).then(function() {

        })
        }

        return img;
    }

    async function sendTxt() {
        let img = await getData();

        const toComponentB= async ()=>{
            navigate('/gen_2d',{state:{img: img}});
        }

        await toComponentB();
    }

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
                <div className="App-container2">
                    <button className="generate-button" onClick={sendTxt}>GENERATE</button>
                </div>
            </div>
        </div>
    );
};

export default Main;
