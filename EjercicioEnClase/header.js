/* vamos a utilizar los props, para que el header tenga un 
*/
function Header(props) {
    return ( 
    < header style={{ textAlign : "center", color: 'yellow', backgroundColor: 'red'}}>
        <h1>{ props.name}</h1>
    </header>
    );
}

//Aqui es donde renderizamos en el DOM nuestro componente.
