import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Tick, DAEModel, DirectionLight, OBJModel} from 'react-3d-viewer';
import {useLocation} from 'react-router-dom';

function Obj_Container({obj_src}){
    return <div className="div1">
        <OBJModel src={obj_src} texPath="">
            <DirectionLight color={0xbb00ff}/>
        </OBJModel>
    </div>
  }

const GEN_3D = () => {
        const location = useLocation();
    
        let data = location.state.obj;
    
        return (
            <div className="App">
    
            {data.map(obj => (
                <Obj_Container obj_src={obj.data} />
            ))}
            
            </div>
            
        );        
    };

   

export default GEN_3D;
