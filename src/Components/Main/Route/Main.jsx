import React from 'react'
import "./Main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import WhyUnity from '../../Main/WhyUnity/WhyUnity';
import OurHistory from '../../Main/OurHistory/OurHistory';
import Solutions from '../../Main/Solutions/Solutions';

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Admin/*' element={<Admin />} />
                    <Route path='/WhyUnity' element={<WhyUnity />} />
                    <Route path='/OurHistory' element={<OurHistory />} />
                    <Route path='/Solutions' element={<Solutions />} />


                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;
