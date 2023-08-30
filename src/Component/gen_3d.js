import '../App.css';
import axios from 'axios';

const GEN_3D = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="div1">
                    <h2 className="result_2d"> 2D Result </h2>
                    <img className="img" src="./test.png"></img>
                </div>
                <div className="div3">
                    <button className="download btn">DOWNLOAD</button>
                    <button className="export btn">EXPORT</button>
                    <button className="again btn">EDIT AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export function generate_3d() {
    try {
        const response = axios.post('url', {
            prompt: document.getElementById('view2').value,
        });
    } catch (error) {
        console.error(error);
    }
}

export default GEN_3D;
