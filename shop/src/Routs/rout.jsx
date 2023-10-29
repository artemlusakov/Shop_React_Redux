import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Page/Home.jsx";

const AppRout = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>

        </Routes>
    );
};

export default AppRout;