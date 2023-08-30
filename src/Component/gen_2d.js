import '../App.css';
import axios from 'axios';

const GEN_2D = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="div1">
                    <div>
                        <h2 className="result_2d"> 2D Result </h2>
                    </div>
                    <div>
                        <img className="img" src="./test.png"></img>
                    </div>
                </div>
                <div className="div2">
                    <h2> Editing </h2>
                    <button className="relative box"> Box1 </button>
                    <button className="relative box"> Box2 </button>
                    <button className="relative box"> Box3 </button>
                </div>
            </div>
        </div>
    );
};

export function generate_2d() {
    try {
        const response = axios.post('url', {
            prompt: document.getElementById('view2').value,
        });
    } catch (error) {
        console.error(error);
    }
}

export default GEN_2D;
