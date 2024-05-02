import React from "react";
import Header from "../Components/Header";
import { useLocation } from 'react-router-dom';

const Tecnologia = () => {
    // Establecer el estado de la categoría seleccionada
    const location = useLocation();
    const rutaActual = location.pathname;
    const nombreRuta = rutaActual.split('/').pop(); // Obtén el último segmento de la ruta

    // Función para manejar el cambio de categoría
    const handleCategoryChange = (categoria) => {
        console.log(`Categoría seleccionada: ${categoria}`);
    };

    return ( 
        <div className="Principal">
            {/* Pasar la categoría seleccionada y la función para manejar el cambio de categoría */}
            <Header 
                name="Blog Tecnologico" 
                categorias={['Principal','Tecnologia', 'Ciencia', 'IA', 'Electronicos']} 
                onCategoryChange={handleCategoryChange} 
                vistaActual={nombreRuta} 
            />
        </div>
    );
};

export default Tecnologia;
