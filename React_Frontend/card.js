const Card = (props) => {
    return (
      <div className="card">
        <img src={props.imagenUrl} alt="Avatar" />
        <div className="container">
          <h4><b>{props.nombre}</b></h4>
          <p>{props.descripcion}</p>
        </div>
      </div>
    );
  };
  
  window.Card = Card;