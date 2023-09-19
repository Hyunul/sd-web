import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Component/main';
import GEN_2D from './Component/gen_2d';
import GEN_3D from './Component/gen_3d';
import Edit from './Component/edit_page';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/gen_2d" element={<GEN_2D />} />
                    <Route path="/gen_3d" element={<GEN_3D />} />
                    <Route path="/edit" element={<Edit />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
