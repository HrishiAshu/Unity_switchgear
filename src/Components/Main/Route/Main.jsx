import React from 'react'
import "./Main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';


const Main = () => {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route extract path='/*' element={<Home />} />
                    <Route extract path='/Admin/*' element={<Admin/>} />
                    {/*  <Route extract path='/login' element={<Login />} />
        <Route extract path='/register' element={<Registeration />} />

        <Route extract path='Home/Profile' element={<Profile/>} />
        <Route extract path='Home/Orders' element={<Orders/>} />
        <Route extract path='Home/Cart' element={<Cart/>} />
        <Route extract path='Home/ProductOverview' element={<ProductOverView/>} /> */}


                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default Main
