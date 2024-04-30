import React from 'react'; 
// los parametros son las acciones que se va  realizar y el texto que va a llevar el boton
/* 
asi es como se tendria que utilizar el boton: 
 <Button onClick={ AccionARealizar } text="Haz click en el boton" />
*/
const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}
        style={{
        backgroundColor: '#804000', // Cambia el color de fondo del botón
        color: 'white', // Cambia el color del texto del botón
        padding: '10px 20px', // Ajusta el relleno del botón
        borderRadius: '13px', // Añade esquinas redondeadas al botón
        border: 'none', // Quita el borde del botón
        cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
         }}>
            { text}

        </button>
    );
}

export default Button; 
