import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Views/login"; // se importa la vista del login
import Principal from "./Views/Principal";
const AppRouter = () => {
    return (
        <Router>
            <Routes>
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/Principal" element= { <Principal />} />
        </Routes>
        </Router>
    );
};

export default AppRouter;
