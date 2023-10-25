import React from 'react'
import "./Main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import WhyUnity from '../../Main/WhyUnity/WhyUnity';
import OurHistory from '../../Main/OurHistory/OurHistory';
import Solutions from '../../Main/Solutions/Solutions';
import Products from '../Products/Products';
import Press from '../Press&Media/Press';
import ContactUsForm from '../ContactUs/ContactUsForm';
import Projects from '../Projects/Projects';

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
                     <Route path='/Projects' element={<Projects />} />
                    <Route path='/Press' element={<Press />} />
                    <Route path='/Products' element={<Products />} />


                    <Route path='/ContactUs' element={<ContactUsForm />} />





                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;
