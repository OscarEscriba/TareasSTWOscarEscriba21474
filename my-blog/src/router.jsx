import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Views/login"; // se importa la vista del login
import Principal from "./Views/Principal";
import Tecnologia from "./Views/Tecnologia";
import Electronicos from "./Views/Electronicos";
import IA from "./Views/IA";
import Ciencia from "./Views/Ciencia";
// parte del admin
import LoginAdmin from "./Views/loginAdmin";
import Eliminar from "./Views/Eliminar";
import AdminMenu from "./Views/MenuPrincipalAdmin";
import UpdateDataView from "./Views/Actualizar";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/Principal" element= { <Principal />} />
        <Route exact path="/Tecnologia" element= { <Tecnologia />} />
        <Route exact path="/Electronicos" element= { <Electronicos />} />
        <Route exact path="/IA" element= { <IA />} />
        <Route exact path="/Ciencia" element= { <Ciencia />} />
        <Route exact path="/Eliminar" element= { <Eliminar />} />
        <Route exact path="/Admin" element= { <LoginAdmin />} />
        <Route exact path="/AdminMenu" element= { <AdminMenu />} />
        <Route exact path="/Actualizar" element= { <UpdateDataView />} />
        </Routes>
        </Router>
    );
};

export default AppRouter;
