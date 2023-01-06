
import React from "react";
import Main from './staticFiles/pages/Main';
import { Routes, Route } from "react-router-dom";
import Edit from "./staticFiles/pages/edit";

export default function MainPage() {
    return (
        <Routes>
            <Route path="/" element={ <Main /> }/>
            <Route path='/edit.jsx/:id' element={ <Edit /> }/>
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
}