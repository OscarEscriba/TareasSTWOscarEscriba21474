import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Views/login"; // se importa la vista del login

const AppRouter = () => {
    return (
        <Router>
            <Routes>
        <Route exact path="/login" element={ <Login />} />
        </Routes>
        </Router>
    );
};

export default AppRouter;
