import './gen_2d.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Img_Container({ img_src }) {
    return (
        <div className="container">
            <div className="div1">
                <div>
                    <h2 className="result_2d"> 2D Result </h2>
                </div>
                <div>
                    <img src={img_src} />
                </div>
            </div>

            <div className="div2">
                <h2> Editing </h2>
                <button className="relative box"> Box1 </button>
                <button className="relative box"> Box2 </button>
                <button className="relative box"> Box3 </button>
            </div>
        </div>
    );
}

const GEN_2D = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let data = location.state.img;

    const getData = async () => {
        let arr = data;
        let obj = [];

        for (let i = 0; i < arr.length; i++) {
            let response = await axios
                .post('http://221.159.102.58:8000/api/3d/', {
                    img: arr[i].data,
                })

                .then(function (response) {
                    obj.push(response.data);
                })
                .catch(function (error) {})
                .then(function () {});
        }

        return obj;
    };

    async function sendTxt() {
        let obj = await getData();

        const toComponentB = async () => {
            navigate('/gen_3d', { state: { obj: obj } });
        };

        await toComponentB();
    }

    return (
        <div className="App">
            {data.map((img) => (
                <Img_Container img_src={img.data} />
            ))}

            <div className="App-container2">
                <button className="generate-button" onClick={sendTxt}>
                    GENERATE
                </button>
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
